module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        ['@babel/preset-react', {
            runtime: 'automatic'
        }]
    ]
}
// Adicionando o 'runtime automatic' não precisa ficar importando o React