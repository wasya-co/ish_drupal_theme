


== Tutorials ==

From: https://drupal.stackexchange.com/questions/208608/getting-arguments-from-url

  $current_path = \Drupal::service('path.current')->getPath();
  $path_args = explode('/', $current_path);

== ReST ==

<pre>


curl --include \
  --request POST \
  --user admin:<>, \
  --header 'Content-type: application/hal+json' \
  http://pi.local/node?_format=hal_json \
  --data-binary '{
    "_links": {
      "type":{"href":"http://pi.local/rest/type/node/article"}
    },
    "title":[{"value":"Node +++ 123 bac +++" }],
    "body":[{"value": "<b>hello, wor</b>ld!", "format": "full_html" }],
    "type":[{"target_id":"article"}],
    "status": [{"value": 1}],
    "_embedded": {
      "http://pi.local/rest/relation/node/article/field_issue": [
        { "uuid": [{ "value": "56229a95-d675-43e1-99b1-f9e11b5579c5" }] }
      ],
      "http://pi.local/rest/relation/node/article/field_tags": [
        { "uuid": [{ "value": "45646a7d-1a16-42e8-b758-f6e1c8d976f7" }] },
        { "uuid": [{ "value": "834e34e2-05ae-498d-b876-453798872ce1" }] }
      ]
    }

  }'
</pre>


