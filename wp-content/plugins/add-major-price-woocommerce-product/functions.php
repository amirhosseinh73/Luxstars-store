<?php

add_filter( 'woocommerce_locate_template', 'major_price_load_woocommerce_templates_from_plugin', 1, 3 );
function major_price_load_woocommerce_templates_from_plugin( $template, $template_name, $template_path ) {
     global $woocommerce;
     $_template = $template;
     
     if ( ! $template_path ) 
        $template_path = $woocommerce->template_url;

     $plugin_path  = untrailingslashit( plugin_dir_path( __FILE__ ) )  . '/template/woocommerce/';

    // Look within passed path within the theme - this is priority
    $template = locate_template(
    array(
      $template_path . $template_name,
      $template_name
    )
   );
   if( ! $template && file_exists( $plugin_path . $template_name ) )
    $template = $plugin_path . $template_name;
 
   if ( ! $template )
    $template = $_template;

   return $template;
}