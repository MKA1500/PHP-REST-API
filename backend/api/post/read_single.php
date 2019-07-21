<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/Database.php';
  include_once '../../models/Post.php';

  $database = new Database();
  $db = $database->connect();

  $post = new Post($db);

  $post->id = isset($_GET['id']) ? $_GET['id'] : die();

  $post->read_single();

  $post_arr = array(
    'id' => $post->id,
    'category_id' => $post->category_id,
    'title' => $post->title,
    'body' => $post->body,
    'image' => $post->image,
    'author' => $post->author,
    'category_name' => $post->category_name,
    'created_at' => $post->created_at,
    'published' => $post->published
  );

  print_r(json_encode($post_arr));

  // get: http://localhost/PHP-REST-API/backend/api/post/read_single.php?id=3
