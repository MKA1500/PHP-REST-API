<?php
  class Post {
    private $conn;
    private $table = 'posts';

    public $id;
    public $category_id;
    public $category_name;
    public $title;
    public $lead;
    public $image;
    public $body;
    public $author;
    public $created_at;
    public $published;

    public function __construct($db) {
      $this->conn = $db;
    }

    public function read() {
      $query = 'SELECT
        c.name as category_name,
        p.id,
        p.category_id,
        p.title,
        p.body,
        p.lead,
        p.image,
        p.author,
        p.created_at,
        p.published
      FROM
        ' . $this->table . ' p
        LEFT JOIN
          categories c ON p.category_id = c.id
        ORDER BY
          p.created_at DESC';

    // prepare statement:
    $stmt = $this->conn->prepare($query);

    // execute query:
    $stmt->execute();

    return $stmt;
    }

    // get single post
    public function read_single() {
      $query = 'SELECT
        c.name as category_name,
        p.id,
        p.category_id,
        p.title,
        p.lead,
        p.image,
        p.body,
        p.author,
        p.created_at,
        p.published
      FROM
        ' . $this->table . ' p
        LEFT JOIN
          categories c ON p.category_id = c.id
        WHERE
          p.id = ?
        LIMIT 0,1';

      $stmt = $this->conn->prepare($query);
      $stmt->bindParam(1, $this->id);

      $stmt->execute();
      $row = $stmt->fetch(PDO::FETCH_ASSOC);

      $this->title = $row['title'];
      $this->body = $row['body'];
      $this->author = $row['author'];
      $this->image = $row['image'];
      $this->id = $row['id'];
      $this->lead = $row['lead'];
      // $this->category_id = $row['categort_id'];
      $this->category_name = $row['category_name'];
      $this->created_at = $row['created_at'];
      $this->published = $row['published'];
    }

    // Create single post:

    public function create() {
      $query = 'INSERT INTO ' .
          $this->table . '
        SET
          title = :title,
          lead = :lead,
          image = :image,
          body = :body,
          author = :author,
          category_id = :category_id,
          created_at = :created_at,
          published = :published';
      // statement:
      $stmt = $this->conn->prepare($query);

      // clean up data - no html:
      $this->title = htmlspecialchars(strip_tags($this->title));
      $this->lead = htmlspecialchars(strip_tags($this->lead));
      $this->image = htmlspecialchars(strip_tags($this->image));
      $this->body = htmlspecialchars(strip_tags($this->body));
      $this->author = htmlspecialchars(strip_tags($this->title));
      $this->category_id = htmlspecialchars(strip_tags($this->category_id));

      // bind data:
      $stmt->bindParam(':title', $this->title);
      $stmt->bindParam(':lead', $this->lead);
      $stmt->bindParam(':image', $this->image);
      $stmt->bindParam(':body', $this->body);
      $stmt->bindParam(':author', $this->author);
      $stmt->bindParam(':category_id', $this->category_id);

      // execute:
      if ($stmt->execute()) {
        return true;
      } else {
        printf("Error: %s \n", $stmt->error);

        return false;
      }
    }
  }
