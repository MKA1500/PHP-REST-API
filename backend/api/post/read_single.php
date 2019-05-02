<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/Database.php';
  include_once '../../models/Post.php';

  // instantiate db & connect it:
  $database = new Database();
  $db = $database->connect();

  // instantiate blog post object:
  $post = new Post($db);
