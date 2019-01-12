#!/usr/bin/python
 
import sqlite3
from sqlite3 import Error
 
 
def create_connection(db_file):
    """ create a database connection to the SQLite database
        specified by the db_file
    :param db_file: database file
    :return: Connection object or None
    """
    try:
        conn = sqlite3.connect(db_file)
        return conn
    except Error as e:
        print(e)
 
    return None
 
 
def select_all_tasks(conn):
    """
    Query all rows in the tasks table
    :param conn: the Connection object
    :return:
    """
    cur = conn.cursor()
    cur.execute("SELECT * FROM blog_core_baseinfo")
 
    rows = cur.fetchall()
 
    for row in rows:
        print(row)
        print(row[2].split(' ')[0])
        print(row[5])
        f = open("_posts/" + row[2].split(' ')[0] + "-" + row[5] + ".markdown","w+")
        # write metadata
        f.write(
            "---\n" +
            "layout: post\n" +
            "title: " + row[3].encode("UTF-8") + "\n" +
            "date: " + row[2].encode("UTF-8") + "\n" +
            "categories: \n" +
            "permalink: /:year/:month/:day/:title/\n"
            "---\n"
        )
        f.write(row[4].encode("UTF-8"))
        f.close()

 
def main():
    database = "jordancolburn.com/simple_blog/prod_db.sqlite3"
 
    # create a database connection
    conn = create_connection(database)
    with conn:
        print("1. Query task by priority:")
        select_all_tasks(conn)
 
 
if __name__ == '__main__':
    main()