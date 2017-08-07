Raspberry Piからサーバの電源をONOFFする。
=====
用意するもの
-----

|         | URL          |
| --------------- | --------------- |
| リレー | https://www.elekit.co.jp/product/LK-RB1 |
| 銅線 | 適当に |
| はんだこて | 適当に |
| 絶縁テープ | https://www.amazon.co.jp/gp/product/B004JLYR8C/ |
| 圧着ペンチ | https://www.amazon.co.jp/gp/product/B002AVVO7U/ |
| ピンコネクタ端子 | https://www.amazon.co.jp/gp/product/B01G5AZ6QG/ |
| ピンコネクタ端子 | https://www.amazon.co.jp/gp/product/B0151E9L3Q/ |
| 端子カバー | https://www.amazon.co.jp/gp/product/B00YM3QG5Y/ |
| ピンヘッダー | https://www.marutsu.co.jp/pc/i/65522/ |

1. リレーを組み立てる
1. エレキットのリレーの端子は2.54mm 端子がちょうど収まるので  
13コマ分切り出して1つおきにピンを抜く
1. 導線を適当に切ってメスピンコネクタを「かしめ」て端子カバーを装着  
このときY型にメスピンコネクタ、メスピンコネクタ、オスピンコネクタで分岐ケーブルを作成
1. 分岐ケーブルをサーバのマザーボードの電源ピンヘッダーへ装着
1. 分岐ケーブルのオスへ既存の電源ボタンを装着
1. 分岐ケーブルのもう片方をリレーのCとMへ繋がるよう導線を作成
1. リレーのVをGPIOの4番　GNDを6番　SIGを8番(GPIO14)へ接続
1. 以下を作成、実行　動けばOK

PowerOFF.sh
``` 
#!/bin/sh

echo "14" > /sys/class/gpio/export
sleep 1
echo "out" > /sys/class/gpio/gpio14/direction
sleep 1
echo "1" > /sys/class/gpio/gpio14/value
sleep 10
echo "0" > /sys/class/gpio/gpio14/value
sleep 1
echo 14 > /sys/class/gpio/unexport
```

PowerON.sh
```
#!/bin/sh

echo "14" > /sys/class/gpio/export
sleep 1
echo "out" > /sys/class/gpio/gpio14/direction
sleep 1
echo "1" > /sys/class/gpio/gpio14/value
sleep 1
echo "0" > /sys/class/gpio/gpio14/value
sleep 1
echo 14 > /sys/class/gpio/unexport
``` 

写真はそのうち
