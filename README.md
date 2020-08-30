# Nekos.deno

Nekos.deno is a reimplementation of [Nekos.py](https://github.com/Nekos-life/nekos.py) in pure TypeScript made for compatibility with the new JavaScript and TypeScript framework Deno.

## Usage

Using Nekos.deno is easy, and here is a quick tutorial on how to get you started.

```ts
import {ImageNekos} from "https://raw.githubusercontent.com/DiegoMagdaleno/nekos.deno/master/mod.ts"

let nekoImageSession = new ImageNekos('meow')
console.log(await nekoImageSession.getImage()) // Returns a JSON object!
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
