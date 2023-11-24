self.__uv$config = {
    prefix: 'static/tiw/',
    bare: 'https://phantomnetwork.cloud/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://cdn.jsdelivr.net/gh/rishibellam/UVSTATIC/static/uv/uv.handler.js',
    bundle: 'https://cdn.jsdelivr.net/gh/rishibellam/UVSTATIC/static/uv/uv.bundle.js',
    config: 'https://cdn.jsdelivr.net/gh/rishibellam/UVSTATIC/uv/uv.config.js',
    sw: 'https://cdn.jsdelivr.net/gh/rishibellam/UVSTATIC/static/uv/uv.sw.js',
};
