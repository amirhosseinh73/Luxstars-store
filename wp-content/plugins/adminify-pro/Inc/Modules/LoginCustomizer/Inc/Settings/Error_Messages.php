<?php

namespace WPAdminify\Inc\Modules\LoginCustomizer\Inc\Settings;

use WPAdminify\Inc\Modules\LoginCustomizer\Inc\Customize_Model;

if (!defined('ABSPATH')) {
    die;
} // Cannot access directly.

class Error_Messages extends Customize_Model
{
    public function __construct()
    {
        $this->error_messages_customizer();
    }


    public function get_defaults()
    {
        return [
            'login_error_messages'  => array(
                'error_incorrect_username' => '<strong>Error:</strong> Invalid Username.',
                'error_empty_username'     => '<strong>Error:</strong> The username field is empty.',
                'error_exists_username'    => '<strong>Error:</strong> This username is already registered. Please choose another one.',
                'error_incorrect_password' => '<strong>Error:</strong> Invalid Password.',
                'error_empty_password'     => '<strong>Error:</strong> The Password field is empty.',
                'error_forget_password'    => '<strong>Error:</strong> Invalid username or email.',
                'error_incorrect_email'    => '<strong>Error:</strong> Invalid Email Address',
                'error_empty_email'        => '<strong>Error:</strong> Please type your email address.',
                'error_exists_email'       => '<strong>Error:</strong> This email is already registered, please choose another one.',
            )

        ];
    }

    /**
     * Error Message: Username Field
     *
     * @param [type] $field_username
     *
     * @return void
     */
    public function fields_username_settings(&$field_username)
    {
        $field_username[] = array(
            'id'      => 'error_incorrect_username',
            'type'    => 'text',
            'title'   => __('Incorrect Username', WP_ADMINIFY_TD),
            'default' => $this->get_default_field('login_error_messages')['error_incorrect_username'],
        );
        $field_username[] = array(
            'id'      => 'error_empty_username',
            'type'    => 'text',
            'title'   => __('Empty Username', WP_ADMINIFY_TD),
            'default' => $this->get_default_field('login_error_messages')['error_empty_username'],
        );
        $field_username[] = array(
            'id'      => 'error_exists_username',
            'type'    => 'text',
            'title'   => __('Exists Username', WP_ADMINIFY_TD),
            'default' => $this->get_default_field('login_error_messages')['error_exists_username'],
        );
    }


    /**
     * Error Message: Password Field
     *
     * @param [type] $field_password
     *
     * @return void
     */
    public function fields_password_settings(&$field_password)
    {
        $field_password[] = array(
            'id'      => 'error_incorrect_password',
            'type'    => 'text',
            'title'   => __('Incorrect Password', WP_ADMINIFY_TD),
            'default' => $this->get_default_field('login_error_messages')['error_incorrect_password'],
        );
        $field_password[] = array(
            'id'      => 'error_empty_password',
            'type'    => 'text',
            'title'   => __('Empty Password', WP_ADMINIFY_TD),
            'default' => $this->get_default_field('login_error_messages')['error_empty_password'],
        );
        $field_password[] = array(
            'id'      => 'error_forget_password',
            'type'    => 'text',
            'title'   => __('Forget Password', WP_ADMINIFY_TD),
            'default' => $this->get_default_field('login_error_messages')['error_forget_password'],
        );
    }


    /**
     * Error Message: Email Field
     *
     * @param [type] $field_email
     *
     * @return void
     */
    public function fields_email_settings(&$field_email)
    {
        $field_email[] = array(
            'id'      => 'error_incorrect_email',
            'type'    => 'text',
            'title'   => __('Invalid Email', WP_ADMINIFY_TD),
            'default' => $this->get_default_field('login_error_messages')['error_incorrect_email'],
        );
        $field_email[] = array(
            'id'      => 'error_empty_email',
            'type'    => 'text',
            'title'   => __('Empty Email', WP_ADMINIFY_TD),
            'default' => $this->get_default_field('login_error_messages')['error_empty_email'],
        );
        $field_email[] = array(
            'id'      => 'error_exists_email',
            'type'    => 'text',
            'title'   => __('Exists Email', WP_ADMINIFY_TD),
            'default' => $this->get_default_field('login_error_messages')['error_exists_email'],
        );
    }


    public function error_messages_customizer()
    {
        if (!class_exists('ADMINIFY')) {
            return;
        }

        $field_username = [];
        $field_password = [];
        $field_email = [];
        $this->fields_username_settings($field_username);
        $this->fields_password_settings($field_password);
        $this->fields_email_settings($field_email);

        /**
         * Section: Error Messages Section
         */
        \ADMINIFY::createSection(
            $this->prefix,
            array(
                'assign' => 'jltwp_adminify_customizer_error_messages_section',
                'title'  => __('Error Messages', WP_ADMINIFY_TD),
                'fields' => array(

                    array(
                        'id'   => 'login_error_messages',
                        'type' => 'tabbed',
                        'tabs'  => array(
                            array(
                                'title'  => 'Username',
                                'fields' => $field_username,
                            ),
                            array(
                                'title'  => __('Password', WP_ADMINIFY_TD),
                                'fields' => $field_password,
                            ),
                            array(
                                'title'  => __('Email', WP_ADMINIFY_TD),
                                'fields' => $field_email
                            )
                        ),
                    ),



                )
            )
        );
    }
}
