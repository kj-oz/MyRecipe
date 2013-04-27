(function () {
  
  /**
   * アイドルタイマー無効化プラグイン用のJavaScriptインターフェースを生成する.
   * @class PhoneGapのアイドルタイマー無効化プラグイン用のJavaScriptインターフェース
   */
  function IdleTimer() {}

  /**
   * アイドルタイマーを有効にする.
   * 
   * @param {Function(result:Object):void} successFunc 成功時コールバック
   * @param {Function(error:Object):void} errorFunc 失敗時コールバック
   */
  IdleTimer.prototype.enable = function (successFunc, errorFunc) {
    this.setIdleTimer(successFunc, errorFunc, "enabled");
  };

  /**
   * アイドルタイマーを無効にする.
   * 
   * @param {Function(result:Object):void} successFunc 成功時コールバック
   * @param {Function(error:Object):void} errorFunc 失敗時コールバック
   */
  IdleTimer.prototype.disable = function (successFunc, errorFunc) {
    this.setIdleTimer(successFunc, errorFunc, "disabled");
  };

  /**
   * アイドルタイマーの状態を得る.
   * 
   * @param {Function(result:Object):void} successFunc 成功時コールバック
   *    resultに現在の状態が返る
   * @param {Function(error:Object):void} errorFunc 失敗時コールバック
   */
  IdleTimer.prototype.get = function (successFunc, errorFunc) {
    this.setIdleTimer(successFunc, errorFunc, "");
  };

  /**
   * アイドルタイマーの状態を変更し変更後の状態を得る.
   * 
   * @param {Function(result:Object):void} successFunc 成功時コールバック
   * @param {Function(error:Object):void} errorFunc 失敗時コールバック
   * @param {String} 変更後の状態 "enabled"=有効、"disabled"=無効、""=変更せずに調べるのみ
   */
  IdleTimer.prototype.setIdleTimer = function(successFunc, errorFunc, status) {
    if (cordova && cordova.exec) {
      console.log("idletimer " + status);
      cordova.exec(successFunc, errorFunc, "IdleTimer", "setIdleTimer", [status]);
    }
  };

  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.idleTimer = new IdleTimer();
})();