class Song{
    constructor(tilte, artist){
        this.tilte = tilte;
        this.artist = artist;
    }
}

const mySong= new Song("Bohemian Rhapody","Qoeen");
console.log(mySong.tilte);
console.log(typeof mySong);