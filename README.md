# migrate tables using 
sqlite3 grocery && .read database/init/db.sql

# quit sqlite3
.quit

# Docker
docker build .
docker run  -p 49160:3011 -d #Image name or id