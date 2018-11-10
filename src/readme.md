# TodoMVC

## TodoMVC App 搬移

index.html body 的部分(templete)搬移到 app.compoment.html
刪除原本 body 的 app.component.html
index.html body 加入

```html
<app-root></app-root>
```

在 index.html

## 變數

html 增加{{ 變數 }}
component.ts 增加 {{ 變數 }} = 'string'

## 屬性值由後端代入

例:[placeholder]="變數"
ts 增加 placeholder

##(事件)
(keyup)=newtodo(\$event)

後台放入
newtodo(event) = {
console.log(event);
}

## 樣板變數

```
#todo 設定input的值為todo
```

為此 component 唯一值

## keyup.enter

enter 鍵判斷
