export class ImageNekos {
  public target: string;
  private possible: string[];

  constructor(desired: string) {
    this.possible = [
      "feet",
      "yuri",
      "trap",
      "futanari",
      "hololewd",
      "lewdkemo",
      "solog",
      "feetg",
      "cum",
      "erokemo",
      "les",
      "wallpaper",
      "lewdk",
      "ngif",
      "tickle",
      "lewd",
      "feed",
      "gecg",
      "eroyuri",
      "eron",
      "cum_jpg",
      "bj",
      "nsfw_neko_gif",
      "solo",
      "kemonomimi",
      "nsfw_avatar",
      "gasm",
      "poke",
      "anal",
      "slap",
      "hentai",
      "avatar",
      "erofeet",
      "holo",
      "keta",
      "blowjob",
      "pussy",
      "tits",
      "holoero",
      "lizard",
      "pussy_jpg",
      "pwankg",
      "classic",
      "kuni",
      "waifu",
      "pat",
      "8ball",
      "kiss",
      "femdom",
      "neko",
      "spank",
      "cuddle",
      "erok",
      "fox_girl",
      "boobs",
      "random_hentai_gif",
      "smallboobs",
      "hug",
      "ero",
      "smug",
      "goose",
      "baka",
      "woof",
      "meow",
    ];

    if (desired == null) {
      throw new Error("No value was provided!");
    }

    if (!this.possible.includes(desired)) {
      throw new Error("The desired value is not in valid values array.");
    }
    this.target = desired;
  }

  async getImage() {
    let request = await fetch(`https://nekos.life/api/v2/img/${this.target}`);
    let data = await request.json();
    return data;
  }
}
