# Some Concepts

## What is RDBMS? Its properties?

- A Relational Database Management system (RDBMS) is a database management system that is based on the relational model
- It has the following major components:
  - Table/Relation
  - Row/Tuple
  - Field
  - Column/Attribute
- Properties:
  - ACID:
    - Atomicity: Transaction all or nothing
    - Consistency: database must be consistent before and after the transaction
      - i.e, IC must be enforced
    - Isolation: Multiple transactions occur independently from interference
      - changes should be visible only after they have been made to the main memory
    - Durability: Changes of a transaction occur even if system failure occurs
  - Others:
    - All data in the same column have same datatype
    - Each row is unique (thanks to primary key)
    - Order doesn't matter
    - Each column has a unique name

## ER Model

- key constraint: only one, represented as arrow
- participation constraint: at least one, represented as thickened line
- weak entities: primary key is combined with another entity set

## Different types of database languages

- DDL: `CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `RENAME`
- DML: `SELECT`, `INSERT`, `UPDATE`, `DELETE`
- DCL: `GRANT`, `REVOKE`
- TCL: `COMMIT`, `ROLLBACK`, `SAVEPOINT`

## Keys

- primary key: minimal set of attribute (or set of attributes) that is used to uniquely identifies all attributes in a relation
- super key: an attribute (or set of attributes) that is used to uniquely identifies all attributes in a relation
- candidate key: minimal set of attribute (or set of attributes) that is used to uniquely identifies all attributes in a relation
- alternate keys: leftover candidate keys
- composite key: a primary key with more than one attribute
  - Their relationships:
    - primary key is a minimal super key
    - there can be multiple candidate keys, but **only one primary key**
    - Primary key is chosen from all candidate keys
    - primary key must be `NOT NULL`, super key does not need to
- foreign key: used to reference another entity set
- unique key: must be unique for all records in the table, cannot be updated, may be `NULL`

## Types of relationships

- unary relationship set
- binary relationship set: two entity sets
- ternary relationship set
- N-ary relationship set

## Indexing in DBMS

- A way to optimize the performance of a database by minimizing the number of disk accesses required when a query is processed
- A SQL index is a quick lookup table for finding records users need to search frequently

```PostgreSQL
CREATE INDEX index_name ON table_name;

<!-- single column index -->
CREATE INDEX index_name ON table_name (column_name);

<!-- multi-columns index -->
CREATE INDEX index_name ON table_name (column1_name, column2_name);

<!-- unique index -->
CREATE UNIQUE INDEX index_name on table_name (column_name);

<!-- partial index -->
CREATE INDEX index_name on table_name (conditional_expression);

<!-- drop index -->
DROP INDEX index_name;
```

- when to avoid index:
  - when the table is small
  - when there's a lot of update/insert operations
  - when the column has a lot of `NULL`s

## Difference between `TRUNCATE` and `DELETE`

- `TRUNCATE` is DDL and `DELETE` is DML
- `DELETE` has where clause, `TRUNCATE` doesn't
- `TRUNCATE` is much faster
- `DELETE` removes rows one at a time and records an entry in the transaction log for each deleted row
- `TRUNCATE` removes all rows from a table

## SQL Commands

```SQL
-- create
CREATE TABLE Mother
(
    RAMQNum    CHAR(12)     NOT NULL,
    mname      VARCHAR(20)  NOT NULL,
    email      VARCHAR(50)  NOT NULL UNIQUE,
    phone      VARCHAR(20)  NOT NULL,
    dob        DATE         NOT NULL,
    address    VARCHAR(200) NOT NULL,
    profession VARCHAR(20)  NOT NULL,
    bloodtype  VARCHAR(2),
    PRIMARY KEY (RAMQNum)
);

CREATE TABLE Couple
(
    coupleID INTEGER  NOT NULL,
    RAMQNum  CHAR(12) NOT NULL,
    fatherID INTEGER,
    PRIMARY KEY (coupleID),
    FOREIGN KEY (RAMQNum)
        REFERENCES Mother (RAMQNum),
    FOREIGN KEY (fatherID)
        REFERENCES Father (fatherID)
);

-- drop
DROP TABLE Mother;
DROP TABLE Couple;

-- alter
-- add a new column
ALTER TABLE Mother ADD eyeColor VARCHAR(10);
-- delete a column
ALTER TABLE Couple DROP fatherID;
-- modify a column
ALTER TABLE Couple MODIFY fatherID VARCHAR(10);

-- truncate: delete all records
TRUNCATE TABLE Couple

-- insert data
INSERT INTO Couple (coupleID, RAMQNum, fatherID)
VALUES (1, 'CONC97582511', 1)
     , (2, 'MURF94572836', 2)
     , (3, 'RIGA02621077', NULL)
     , (4, 'GUTV95540766', 3)
     , (5, 'CORL95540655', 4)
     , (6, 'SEXA98621038', 5)
;

-- update data
UPDATE students    
SET User_Name = 'Sonoo'    
WHERE Student_Id = '3'  

-- DCL
-- grant or take away control from the user
GRANT SELECT, UPDATE ON MY_TABLE TO SOME_USER, ANOTHER_USER;
REVOKE SELECT, UPDATE ON MY_TABLE FROM USER1, USER2;  

-- TCL
-- can only be used with DML

-- save all transactions to the database
COMMIT;

-- undo transactions that have not already been saved to the database
ROLLBACK;

-- roll the transaction back to a certain point without rolling back the entire transaction
SAVEPOINT SAVEPOINT_NAME;

-- select
SELECT labworkDate AS Lab_Date,
       result      AS Blood_Iron_Result
FROM MedicalTest
WHERE coupleID = (
    SELECT coupleID
    FROM Couple
             LEFT JOIN Mother ON Couple.RAMQNum = Mother.RAMQNum
    WHERE mname = 'Victoria Gutierrez'
)
  AND type = 'blood iron'
  AND pregnancyNum = 2
ORDER BY labworkDate;

-- union
SELECT primaryPractitionerID, dueYM, finalDD
    FROM Pregnancy
    WHERE finalDD IS NULL
      AND EXTRACT(YEAR FROM dueYM) = 2022
      AND EXTRACT(MONTH FROM dueYM) = 07
UNION ALL
SELECT primaryPractitionerID, dueYM, finalDD
    FROM Pregnancy
    WHERE finalDD IS NOT NULL
      AND EXTRACT(YEAR FROM finalDD) = 2022
      AND EXTRACT(MONTH FROM finalDD) = 07

-- with
WITH RelevantPreg AS (
    SELECT primaryPractitionerID, dueYM, finalDD
    FROM Pregnancy
    WHERE finalDD IS NULL
      AND EXTRACT(YEAR FROM dueYM) = 2022
      AND EXTRACT(MONTH FROM dueYM) = 07
)
SELECT Institution.name             AS Health_Institution_Name
     , COUNT(primaryPractitionerID) AS Num_July_Pregnancy
FROM Institution
         LEFT JOIN Midwife ON Institution.institutionID = Midwife.institutionID
         FULL OUTER JOIN RelevantPreg ON RelevantPreg.primaryPractitionerID = Midwife.practitionerID
GROUP BY Institution.name
ORDER BY Num_July_Pregnancy DESC;
```
