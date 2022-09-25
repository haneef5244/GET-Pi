# GET-Pi

## Run the lambda locally

### sam local start-api

templates.yml file was included in the API to run the application locally

# DB Details

DB_CLIENT: pg
DB_HOST: naluri-database.cyhvpulvlgjq.ap-southeast-1.rds.amazonaws.com
DB_NAME: postgres
DB_USER: naluri
DB_PASSWORD: naluri(!#%)


# Limitations & Things to be improved

1) Naming of the Lambda can be properly named to a better standard naming convention
2) DB details can be stored in secret
3) Due to time limitation, this architecture only follows a simple Client - API architecture and does not provide any real time most recent calculated PI value
4) Also due to time limitation, the calculation of most recent PI is calculated whenever the API is triggered, this will lead to performance issue if the PI reaches a large number. A proposed better solution would be to create a Batch job which runs in the background to automatically increase the most recent PI value.
5) Another technical limitation would be the amount of PI decimal places that can be stored in the db as we know the number of characters that can be stored in jsonb is limited (the PI value was stored in jsonb)
