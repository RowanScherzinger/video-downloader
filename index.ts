import Server from "./src/Server";

async function main(): Promise<void>
{
    // Some neat cli args or env file could be read in here
    const port: number = 5000;
    const server: Server = new Server(port);

    // Meat and potatoes of the server
    server.run();
}

main();
