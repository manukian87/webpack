import * as $ from 'jquery'
import Post from '@models/Post'
// import json from './assets/json.json'
// import xml from './assets/data.xml'
import WebpackLogo from './assets/webpack-logo.png'
import csv from './assets/data.csv'
import './styles/styles.css'

const post = new Post('Webpack Post Title', WebpackLogo)

$('pre').html(post.toString())

console.log('post to String', post.toString())

// console.log('json', json)
console.log('csv', csv)