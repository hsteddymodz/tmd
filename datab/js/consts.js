const fs = require('fs')
const toMs = require('ms')
const request = require('request')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const _level = JSON.parse(fs.readFileSync('./datab/level.json'))

const getLevelingXp = (userId) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === userId) {
position = i
}
})
if (position !== false) {
return _level[position].xp
}
}

const getLevelingLevel = (userId) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === userId) {
position = i
}
})
if (position !== false) {
return _level[position].level
}
}        

const getLevelingId = (userId) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === userId) {
position = i
}
})
if (position !== false) {
return _level[position].jid
}
}

const addLevelingXp = (userId, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === userId) {
position = i
}
})
if (position !== false) {
_level[position].xp += amount
fs.writeFileSync('./datab/level.json', JSON.stringify(_level))
}
}

const addLevelingLevel = (userId, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === userId) {
position = i
}
})
if (position !== false) {
_level[position].level += amount
fs.writeFileSync('./datab/level.json', JSON.stringify(_level))
}
}

const addLevelingId = (userId) => {
const obj = {jid: userId, xp: 1, level: 1}
_level.push(obj)
fs.writeFileSync('./datab/level.json', JSON.stringify(_level))
}
 


module.exports = { 
getLevelingXp, 
getLevelingLevel, 
getLevelingId, 
addLevelingXp, 
addLevelingLevel, 
addLevelingId }