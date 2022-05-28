<?php

class Connection
{
    private $HOST = "";
    private $USER = "";
    private $PASSWORD = "";
    private $DATABASE = "";
    private $CHARSET = "";
    private $PORT = "";
    private $OPTIONS = [];
    private $pdo = null;

    // Constructor
    public function __construct()
    {
        $this->HOST = "localhost";
        $this->USER = "root";
        $this->PASSWORD = "";
        $this->DATABASE = "graficos_php";
        $this->CHARSET = "utf8";
        $this->PORT = "3306";
        $this->OPTIONS = [
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
            PDO::MYSQL_ATTR_FOUND_ROWS => true
        ];
    }

    // Connect to database
    public function connect()
    {
        try {
            $this->pdo = new PDO("mysql:host=" . $this->HOST . ";dbname=" . $this->DATABASE . ";charset=" . $this->CHARSET . ";port=" . $this->PORT, $this->USER, $this->PASSWORD, $this->OPTIONS);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            die("Connection failed: " . $e->getMessage());
            $this->pdo = null;
        }
        return $this->pdo;
    }

    // Disconnect from database
    public function disconnect()
    {
        $this->pdo = null;
    }
}

?>
