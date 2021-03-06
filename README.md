MyRecipe
======================
MyRecipeは、料理のレシピを個人的に登録、閲覧するためのPhoneGap(Cordova)を利用したiPad用のハイブリッド・アプリケーションです。
特に料理中に使いやすくすることを主眼に作成されています。

アプリケーションのほとんどの部分は、HTML、JavaScript、CSSで書かれており、
画面のロックを防止するためのPhoneGap用pluginとWebViewのコントローラの一部修正にのみObjective-Cを利用しています。

このソースからビルドされるアプリケーションは、Apple社のAppStoreで **レシピ帳** という名称で
無料で配信中です。  
　[https://itunes.apple.com/us/app/reshipi-zhang/id641147266?l=ja&ls=1&mt=8][AppStore]

また、同じアプリをWebアプリとして以下のアドレスで配信していますので、すぐにブラウザでお試しいただけます。
（ただし、2014/09現在、IE、Firefoxでは正常に動作しませんのでご注意ください）
　[http://recipenote.herokuapp.com/recipenote.html][Heroku]

画面イメージや使い方は、以下のページをご覧下さい。  
　[http://recipe-cho.blogspot.jp][Blogger] 

###アプリケーションの特徴###

**レシピ閲覧画面**
* 予め選択しておいた複数のレシピを１タップで切替えることができます。
* ちょっと離れたところからでも見えるよう、大きなフォントを使用しています。 
* この画面の表示中は、端末がロックされません。（iPadアプリ版のみ） 

**レシピ一覧画面**
* 様々な条件で簡単にレシピを絞り込むことができます。 

**その他**
* 入力したレシピは複数の端末間で共有することが可能です。（データの共有にはDropboxを利用します）入力はキーボードを使えるPCで、調理中の閲覧はiPadをレンジ横において、といった使い方が可能です。
* ネットワークにつながっていない状態でも、端末単独で利用することが可能です。その間もレシピの入力・編集も可能で、これらのデータは再度ネットワークに繋げた際に自動的に同期されます。
 
###ソースコードの特徴###

* コメントは全て日本語です。メソッド定義等は、JsDocの形式で記述しています。（javaScript）

###開発環境###

* 2014/09/05現在、Mac 0S X 10.9.4、Xcode 5.1.1

###使用ライブラリ###

* Cordova 2.5.0
* jQuery 1.8.3
* jQuery Mobile 1.1.2
* SNBinder 0.5.3
* KiiCloud SDK for JavaScript 2.1.19

###使用クラウドサービス###

* KiiCloud

動作環境
-----
**iPad版**

iOS 6.0以上、iPad専用

**Web版** （2014/09/05時点で動作確認済みのもの）

Mac
* Safari（7.0.6）
* Chrome（37.0）

Windows
* Chrome（37.0）

ライセンス
-----
 [MIT License][mit]. の元で公開します。  

-----
Copyright &copy; 2013 Kj Oz  

[AppStore]: https://itunes.apple.com/us/app/reshipi-zhang/id641147266?l=ja&ls=1&mt=8
[Heroku]: http://recipenote.herokuapp.com/recipenote2.html
[Blogger]: http://recipe-cho.blogspot.jp
[MIT]: http://www.opensource.org/licenses/mit-license.php