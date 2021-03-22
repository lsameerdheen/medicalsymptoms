module.exports = function(api) {
  api.cache(true);
  const presets =[
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-react', {targets: {node: 'current'}}] // add this
  ];
  const plugins = [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-proposal-class-properties',
	 '@babel/plugin-syntax-jsx'
  ];

  return {
    presets,
    plugins
  };
};
