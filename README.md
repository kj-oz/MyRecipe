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
（ただし、2013/05/18現在、動作確認済みのブラウザはMac上のサファリ、Chromeのみになります）
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

* 2013/05/16現在、Mac 0S X 10.7.5（Lion）、Xcode 4.6.2

###使用ライブラリ###

* Cordova 2.5.0
* jQuery 1.8.3
* jQuery Mobile 1.1.2
* SNBinder 0.5.3
* dropbox.js 0.9.2


動作環境
-----
**iPad版**

iOS 5.1以上、iPad専用

**Web版** （2013/05/18動作確認済み）

Mac版Safari（6.0.3）
Mac版Chrome（26.0.1410.65）


ライセンス
-----
 [MIT License][mit]. の元で公開します。  

-----
Copyright &copy; 2013 Kj Oz  

[AppStore]: https://itunes.apple.com/us/app/reshipi-zhang/id641147266?l=ja&ls=1&mt=8
[Heroku]: http://recipenote.herokuapp.com/recipenote.html
[Blogger]: http://recipe-cho.blogspot.jp
[MIT]: http://www.opensource.org/licenses/mit-license.php