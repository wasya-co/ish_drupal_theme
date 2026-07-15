
== Deploy ==

  * tag, push to wasya-co remote:

    git tag -a v2.1.2 -m "Release v2.1.2"
    git push origin v2.1.2

  * update version in composer.json

  * ssh into node, login to docker and run:
  * the container_name is piousbox_com, service is app_*

    composer update wasya-co/ish_drupal_theme \
      --ignore-platform-req=ext-bcmath --ignore-platform-req=ext-gd ;
    drush cr

