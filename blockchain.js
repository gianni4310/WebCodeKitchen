
const Blockchain = () => {

    const chain = []

    function addBlock(block) {

        const lastBlock = chain[chain.length -1];
        const newBlock = Block(data, lastBlock.createHash());
        chain.push(newBlock);
    }
}