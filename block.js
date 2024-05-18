

const Block = (data = {}, lastHash = '') => {
    return {
        time: Date.now(),
        data: data,
        lastHash: lastHash,
        createHash: function() {
            return sha256(this.time + this.lastHash + JSON.stringify(this.data));
        }
    }
}
