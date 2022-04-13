/********************************************************************
 * @author:      Kaven
 * @email:       kaven@wuwenkai.com
 * @website:     http://blog.kaven.xyz
 * @file:        [portfolio] /sc.js
 * @create:      2022-02-22 18:29:38.737
 * @modify:      2022-04-11 23:30:44.298
 * @version:     
 * @times:       101
 * @lines:       51
 * @copyright:   Copyright © 2022 Kaven. All Rights Reserved.
 * @description: [description]
 * @license:     [license]
 ********************************************************************/

const toggleButtton = document.getElementsByClassName('menu-btn')[0]
const navebarlinks = document.getElementsByClassName('menu')[0]
toggleButtton.addEventListener('click', () => {
    navebarlinks.classList.toggle('active')
})
const th = document.getElementById('menu-home');
const ta = document.getElementById('menu-about');
const ts = document.getElementById('menu-edu');
const tsk = document.getElementById('menu-skills');
const tt = document.getElementById('menu-teams');
const tc = document.getElementById('menu-contact');
const nlist = document.getElementsByClassName('menu')[0]
th.addEventListener('click', () => {
    nlist.classList.toggle('active')

})
ta.addEventListener('click', () => {
    nlist.classList.toggle('active')

})
ts.addEventListener('click', () => {
    nlist.classList.toggle('active')

})
tsk.addEventListener('click', () => {
    nlist.classList.toggle('active')

})
tt.addEventListener('click', () => {
    nlist.classList.toggle('active')

})
tc.addEventListener('click', () => {
    nlist.classList.toggle('active')

})