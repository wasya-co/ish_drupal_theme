
infinite shelter

ish_drupal_theme

== Tutorials ==

From: https://drupal.stackexchange.com/questions/208608/getting-arguments-from-url

  $current_path = \Drupal::service('path.current')->getPath();
  $path_args = explode('/', $current_path);




