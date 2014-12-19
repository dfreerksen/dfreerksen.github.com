---
title: Overloading Codeigniter DB Driver
date:  2012-02-26 16:53:03
categories:
- CodeIgniter
- PHP
- Projects
- Work
tags:
- CodeIgniter
- PHP
- Tips & Tricks
---

Working with Microsoft SQL Server and PHP isn't always the easiest thing to do. There are always like quarks you have to work around and even big problems that have to be fixed before anything else can be done.

One of the most annoying things I have found is that MSSQL doesn't have an offset like MySQL does. Offsets are great for pagination. If you have 1000 records and you want to pull 200 records at at time, you would limit the number of records to 200 (TOP 200). But how do you get to page two? That's where offset comes in. Let's says you want to get the top X records, but offset by Y records. Without offset, the only decent way I could think of to do pagination was to pull the top 400 and in the PHP code I split off the first 200 records that I don't need. That gets pretty ugly if there are 10k records and you are displaying 10 records at a time. By the last page, your query is taking way to long to return results when you aren't using 99% of them.

All that being said, I am working on a project built with Codeigniter that connects to a MSSQL database. Codeigniter has some pretty good DB libraries so most things work just fine. My two big problems are offset and batch insert and batch update (more on batch in a later post). We don't want to go into the Codeigniter system directory and start changing things as we see fit. If we dod that, we can never update Codeigniter at a later date. The answer is to overload, or extend, the Codeigniter database driver. What we have to do is extend a function in the system/core/Loader.php file. To do this, in application/core/ create a file named MY\_Loader.php. Just to reiterate, this file goes in application/core/ NOT application/libraries/ If you have changed the subclass\_prefix config value to something other than MY_ then you will need to rename the file accordingly. Next, copy/paste the code below into the file you just created.

{% highlight php linenos %}
<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class MY_Loader extends CI_Loader {

  public function database($params = '', $return = FALSE, $active_record = NULL)
  {
      // Grab the super object
      $CI =& get_instance();

      // Do we even need to load the database class?
      if (class_exists('CI_DB') AND $return == FALSE AND $active_record == NULL AND isset($CI->db) AND is_object($CI->db))
      {
          return FALSE;
      }

      require_once(BASEPATH.'database/DB.php');

      $db = DB($params, $active_record);

      // Load extended DB driver
      $custom_db_driver = config_item('subclass_prefix').'DB_'.$db->dbdriver.'_driver';
      $custom_db_driver_file = APPPATH.'core/'.$custom_db_driver.'.php';

      if (file_exists($custom_db_driver_file))
      {
          require_once($custom_db_driver_file);

          $db = new $custom_db_driver(get_object_vars($db));
      }

      // Return DB instance
      if ($return === TRUE)
      {
          return $db;
      }

      // Initialize the db variable. Needed to prevent reference errors with some configurations
      $CI->db = '';
      $CI->db =& $db;
  }
}
{% endhighlight %}

The above code is pretty much the same thing found in system/core/Loader.php with some changes to make it look in application/core/ for your extensions to the database drivers. If there aren't any database extensions, no big deal. It will continue on like normal.

So the next thing we have to do is create a file named MY\_DB\_mssql\_driver.php in application/core/ Again, this file goes in application/core/ NOT application/libraries/ and if you have changed the subclass\_prefix config value to something other than MY_ then you will need to rename the file accordingly. In my case, I am extending the MSSQL database driver so my file is named MY\_DB\_mssql\_driver.php. If you are extending the MySQL driver, then you would name it MY\_DB\_mysql\_driver.php. Next, copy/paste the following code into the MY\_DB\_mssql_driver.php file you just created

{% highlight php linenos %}
<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class MY_DB_mssql_driver extends CI_DB_mssql_driver {

    /**
     * Limit string
     *
     * Generates a platform-specific LIMIT clause
     *
     * @param   string   the sql query string
     * @param   integer  the number of rows to limit the query to
     * @param   integer  the offset value
     * @return  string
     */
    function _limit($sql, $limit, $offset)
    {
        if ( ! $offset)
        {
            $i = $limit;

            return preg_replace('/(^\SELECT (DISTINCT)?)/i','\\1 TOP '.$i.' ', $sql);
        }

        if (count($this->ar_orderby) > 0)
        {
            $ordeR_by  = "ORDER BY ";
            $ordeR_by .= implode(', ', $this->ar_orderby);

            if ($this->ar_order !== FALSE)
            {
                $ordeR_by .= ($this->ar_order == 'desc') ? ' DESC' : ' ASC';
            }

            $sql = preg_replace('/(\\'. $ordeR_by .'\n?)/i','', $sql);
            $sql = preg_replace('/(^\SELECT (DISTINCT)?)/i','\\1 row_number() OVER ('.$ordeR_by.') AS rownum, ', $sql);

            return "SELECT * \nFROM (\n" . $sql . ") AS A \nWHERE A.rownum BETWEEN (".($offset + 1).") AND (".($offset + $limit).")";
        }

        else
        {
            echo 'Query must have an order_by clause in order to be offset.';
        }
    }

}
{% endhighlight %}

The above code is a direct copy/paste from the code <a href="http://codeigniter.com/forums/member/88927/" target="_blank">Kyle Johnson</a> on is <a href="http://codeigniter.com/forums/viewthread/160626/#959597" target="_blank">Codeigniter forum post</a>. All it does is check if an offset is being passed. If there is, then it builds a subquery to create the offset. If the offset is not defined or is 0, then it does the normal function does.

The only thing you have to do now is run your application. There shouldn't be any additional changes to any libraries or to your SQL calls.

Again, the files for this post have been committed to <a href="https://github.com/dfreerksen/ci-overload-db" target="_blank">Github</a>.
