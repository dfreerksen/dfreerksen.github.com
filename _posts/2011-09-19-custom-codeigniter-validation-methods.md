---
title: Custom CodeIgniter Validation Methods
date:  2011-09-19 21:12:05
categories:
- CodeIgniter
- PHP
- Projects
- Work
tags:
- Code
- CodeIgniter
- PHP
- Tips & Tricks
---

CodeIgniter's <a href="http://codeigniter.com/user_guide/libraries/form_validation.html" title="CodeIgniter Form Validation" target="_blank">Form Validation</a> library isn't bad. It takes a little getting use to but it can be very powerful. Most of the validation that comes with CodeIgniter are pretty much the only ones you will ever need. Every now and then you will need something else. <a href="http://codeigniter.com/user_guide/general/creating_libraries.html" title="Creating and Extending CodeIgniter Libraries" target="_blank">Extending CodeIgniter libraries</a> is very easy. These are some of the custom form validation I've had to do in previous projects

First of all, you have to create a library that will extend CodeIgniter's library. Create a new file named MY\_Form\_validation.php and put it in the application/libraries/ directory. Here is what that library will look like:

{% highlight php linenos %}
<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class MY_Form_validation extends CI_Form_validation {
    protected $CI;

    function __construct()
    {
        parent::__construct();

        $this->CI =& get_instance();
    }
}
{% endhighlight %}

The first validation method I used for a project where the user would enter a fraction and I didn't really want to convert a decimal to a fraction. So I just created a validation method.

{% highlight php linenos %}
<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Fraction
 *
 * @access  public
 * @param   string  $str
 * @return  bool
 */
public function fraction($str)
{
    $this->CI->form_validation->set_message('fraction', 'The %s field must be a valid fraction.');

    return ( ! preg_match("/^(\d++(?! */))? *-? *(?:(\d+) */ *(\d+))?.*$/", $str)) ? FALSE : TRUE;
}
{% endhighlight %}

Usage example:

{% highlight php linenos %}
$this->form_validation->set_rules('screen_size', 'Screen Size', 'fraction');
{% endhighlight %}

This was a fun validation to make. When a user signs up or is changing their password, their password must be <a href="http://www.pcicomplianceguide.org/" title="PCI Compliance" target="_blank">PCI compliant</a>. For a password to be PCI compliant, it must meet the following:  
1. Must be between 6 and 99 characters in length  
2. Must not contain two consecutively repeating characters  
3. Must contain at least one upper-case letter  
4. Must contain at least one lower-case letter  
5. Must contain at least one number  
6. Must contain at least one special character

Please note that the validation message is really long. You may want to simplify it a little before using it

{% highlight php linenos %}
<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * PCI compliance password
 *
 * @access  public
 * @param   $str
 * @return  bool
 */
public function pci_password($str)
{
    $special = '!@#$%*-_=+.';

    $this->CI->form_validation->set_message('pci_password', 'For PCI compliance, %s must be between 6 and 99 characters in length, must not contain two consecutively repeating characters, contain at least one upper-case letter, at least one lower-case letter, at least one number, and at least one special character ('.$special.')');

    return (preg_match('/^(?=^.{6,99}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*['.$special.'])(?!.*?(.)\1{1,})^.*$/', $str)) ? TRUE : FALSE;
}
{% endhighlight %}

Usage example:

{% highlight php linenos %}
$this->form_validation->set_rules('password', 'Password', 'pci_password');
{% endhighlight %}

CodeIgniter already has a validation method for *required*. But I needed one to be required if a different field had a value. A couple weeks later I needed to have method to make a field required if another field had a certain value.

{% highlight php linenos %}
<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Required if another field has a value (related fields) or if a field has a certain value
 *
 * @access  public
 * @param   string  $str
 * @param   string  $field
 * @return  bool
 */
public function required_if($str, $field)
{
    list($fld, $val) = explode(',', $field, 2);

    $this->CI->form_validation->set_message('required_if', 'The %s field is required.');

    // $fld is filled out
    if (isset($_POST[$fld]))
    {
        // Must have specific value
        if ($val)
        {
            // Not the specific value we are looking for
            if ($_POST[$fld] == $val AND ! $str)
            {
                return FALSE;
            }
        }

        return TRUE;
    }

    return FALSE;
}
{% endhighlight %}

Usage example:

{% highlight php linenos %}
$this->form_validation->set_rules('bar', 'Bar', 'required_if[foo]'); // required if field 'foo' has a value
$this->form_validation->set_rules('foobar', 'Foo Bar', 'required_if[foo,bar]'); // required if field 'foo' has a value of 'bar'
{% endhighlight %}

There are a lot of examples of this validation floating around. It requires that a value being passed has a unique value in the database. This one also takes into account the database prefix.

{% highlight php linenos %}
<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Unique
 *
 * @access  public
 * @param   string
 * @param   field
 * @return bool
 */
public function unique($str, $field)
{
    list($table, $column) = explode(',', $field, 2);

    $this->CI->form_validation->set_message('unique', 'The %s that you requested is already in use.');

    $query = $this->CI->db->query("SELECT COUNT(*) AS dupe FROM {$this->CI->db->dbprefix($table)} WHERE {$column} = '{$str}'");
    $row = $query->row();

    return ($row->dupe > 0) ? FALSE : TRUE;
}
{% endhighlight %}

Usage example:

{% highlight php linenos %}
$this->form_validation->set_rules('email', 'Email', 'unique[DBTABLE,DBFIELD]'); // DBTABLE is the database table and DBFIELD is the database field to validation against
{% endhighlight %}

I took the previous validation a step further so that the field value must be unique in the database EXCEPT for a certain record ID. This one is really good for if you have an existing user in the system and they are updating their profile. You want to make sure that their email address is unique. If you run the previous *unique* validation it will fail because the email address is already in use by the user currently being edited. So we need to exclude that users ID from the validation. This one also takes into account the database prefix.

{% highlight php linenos %}
<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Unique except. Check if a specific value is in use except when the value is attached to a specific row ID
 *
 * @param   string
 * @param   field
 * @return  bool
 */
public function unique_exclude($str, $field)
{
    list($table, $column, $fld, $id) = explode(',', $field, 4);

    $this->CI->form_validation->set_message('unique_exclude', 'The %s that you requested is already in use.');

    $query = $this->CI->db->query("SELECT COUNT(*) AS dupe FROM {$this->CI->db->dbprefix($table)} WHERE {$column} = '$str' AND {$fld} <> {$id}");
    $row = $query->row();

    return ($row->dupe > 0) ? FALSE : TRUE;
}
{% endhighlight %}

Usage example:

{% highlight php linenos %}
$this->form_validation->set_rules('email', 'Email', 'unique[DBTABLE,DBFIELD,IDFIELD,ID]'); // DBTABLE is the database table, DBFIELD is the database field, IDFIELD is the primary key for the table, and ID is the unique ID for the user
{% endhighlight %}
