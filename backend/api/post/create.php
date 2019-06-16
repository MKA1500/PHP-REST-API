<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-Width');

  include_once '../../config/Database.php';
  include_once '../../models/Post.php';

  // instantiate db & connect it:
  $database = new Database();
  $db = $database->connect();

  // instantiate blog post object:
  $post = new Post($db);

  // get raw posted data:

  $data = json_decode(file_get_contents("php://input"));

  $post->title = $data->title;
  $post->body = $data->body;
  $post->author = $data->author;
  $post->category_id = $data->category_id;
  $post->created_at = $data->created_at;
  $post->published = $data->published;

  // reate the post:
  if ($post->create()) {
    echo json_encode(
      array('message' => 'Post Created')
    );
  } else {
    echo json_encode(
      array('message' => 'Post Not Created')
    );
  }
