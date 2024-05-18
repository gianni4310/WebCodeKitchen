


class Block {

    constructor(time = Date.now(), data = {}) {
        this.time = time;
        this.data = data;
        this.lastHah = '';
    }

    createHash() {
        return sha256(this.time + this.lastHah + this.data);
    }


}