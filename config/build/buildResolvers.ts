import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers (options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'], // для каждого модуля index будет главным файлом
    alias: {
      '@': options.paths.src
    }
  }
}