MyRecipe
======================
MyRecipeは、料理のレシピを管理するためのPhoneGap(Cordova)を利用したiPad用の
ハイブリッド・アプリケーションです。
アプリケーションのほとんどの部分は、HTML、JavaScript、CSSで書かれており、
画面のロックを防止するためのPhoneGap用pluginとWebViewのコントローラのみObjective-Cを
利用しています。

このソースからビルドされるアプリケーションは、Apple社のAppStoreで **レシピ帳** という名称で
無料で配信中です。  
　[AppStore][AppStore]

また、同じアプリをWebアプリとして以下のアドレスで配信していますので、すぐにブラウザでお試しいただけます。
　[Heroku][Heroku]

画面イメージや使い方は、以下のページをご覧下さい。  
　[Blogger][Blogger] 

###アプリケーションの特徴###

* レシピを表示する画面では予め選んでおいた複数のレシピを簡単に切り替えることが出来ます。
* レシピを一覧する画面では、様々な条件で対象のレシピを絞り込むことが出来ます。
* 登録したレシピは、Dropboxに保存され、複数のiPad、Webアプリ間で。共有することができます。
* ネットワークに接続されていない環境でも使用可能で、新しいレシピの入力や既存のレシピの編集も可能です。これらの結果は次にネットワークに繋がった時にDropboxと同期されます。

###ソースコードの特徴###

* コメントは全て日本語です。メソッド定義等はJSDocの形式で記述しています。

###開発環境###

* 2013/05/16現在、Mac 0S X 10.7.5（Lion）、Xcode 4.6.2

動作環境
-----
iOS 5.1以上、iPad専用

ライセンス
-----
 [MIT License][mit]. の元で公開します。  

-----
Copyright &copy; 2012 Kj Oz  

[AppStore]: https://itunes.apple.com/us/app/reshipi-zhang/id641147266?l=ja&ls=1&mt=8
[Heroku]: http://recipenote.herokuapp.com/recipenote.html
[Blogger]: http://recipe-cho.blogspot.jp
[MIT]: http://www.opensource.org/licenses/mit-license.php