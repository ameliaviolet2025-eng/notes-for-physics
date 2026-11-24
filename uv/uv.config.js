self.__uv$config = {
    prefix: '/notes-for-physics/uv/service/',
    bare: 'https://aluu.xyz',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/notes-for-physics/uv/uv.handler.js',
    bundle: '/notes-for-physics/uv/uv.bundle.js',
    config: '/notes-for-physics/uv/uv.config.js',
    sw: '/notes-for-physics/uv/uv.sw.js',
};
