const Pool = require("pg").Pool;
//instantiating connection to postgres

const pool = new Pool({
  user: "paul",
  host: "localhost",
  database: "api",
  password: "59885988aa",
  port: 5432
});
// for finding all users
// designating queries to use when making requests
// index query
const getUsers = (req, res) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (err, results) => {
    if (err) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
// for finding a single user, usually on log in
// $1 will be used as placeholder for PostgresSQL, second argument will be placed in it
// will be used for "/user/:id"  where :id is the wildcard, a.k.a params
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM users WHERE id = $1", [id], (err, results) => {
    if (err) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
//for posting user or signing up user
// same concept except name and email will be found from body of the information passed
// will be used GET/POST request to "/users"
const createUser = (req, res) => {
  const { name, email } = request.body;
  pool.query(
    `INSERT INTO users (name, email) VALUES ($1, $2)`,
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`User add with IDL ${res.insertID}`);
    }
  );
};

// for updating user info
// same concept all $ are place holders,
// will be used for GET/POST and UPDATE To "/users/:id"
const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

// for deleting user info
const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
