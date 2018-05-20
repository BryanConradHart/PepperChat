export class App {
    private express;
  
    constructor (express) {
      this.express = express;
    }
  
    public setup (): void {
        this.express.post("*", 
            (req, res) => {
                res.json({message: 'Hello World!' });
            }
        );
        this.express.listen(8080);
    }
}