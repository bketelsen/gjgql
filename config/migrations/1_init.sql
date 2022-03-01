-- Write your migrate up statements here

CREATE TABLE people (
  id VARCHAR(255) NOT NULL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  short_name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  UNIQUE (email)
);

---- create above / drop below ----

-- Write your down migrate statements here. If this migration is irreversible
-- then delete the separator line above.

DROP TABLE people

