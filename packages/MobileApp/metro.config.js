const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// Get default configuration
const defaultConfig = getDefaultConfig(__dirname);

// Extend resolver to include the shared `node_modules`
defaultConfig.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'), // Local node_modules
  path.resolve(__dirname, '../../node_modules'), // Shared node_modules
];

// Add watch folders for monorepo
defaultConfig.watchFolders = [
  path.resolve(__dirname, '../../'), // Watch monorepo root
];

// Export merged configuration
module.exports = mergeConfig(defaultConfig, {});
