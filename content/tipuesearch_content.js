var tipuesearch = {"pages": [{'title': 'About', 'text': '四設二甲41023138 林敬燐 \n github倉儲: https://github.com/mdecad2022/site-jamie920130 \n 個人網站: https://mdecad2022.github.io/site-jamie920130/content/index.html \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'HW', 'text': ' Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n \n', 'tags': '', 'url': 'HW.html'}, {'title': 'w1', 'text': '中秋節放假 \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '建立自己的倉儲，介紹倉儲、介紹課程、建立github \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '\n 透過\xa0\xa0 mdecad2022\xa0\xa0 的 organization 建立個人可以管理的倉儲 (site-Github_帳號) \xa0 \n 利用\xa0\xa0 replit 帳號所啟動的動態網站進行內容管理 \xa0 \n 動態轉為靜態網站內容之後,\xa0\xa0 要設法與 Github 倉儲同步. \xa0 \n \n 執行步驟: \xa0 \n \xa0 \n \n 必須先在個人的 mdecad2022/site-github_帳號\xa0 倉儲進行處理 \xa0 \n 第一步就是刪除 config/config 設定檔案 \xa0 \n 修改 .gitignore 成為:\xa0\xa0 \xa0 https://raw.githubusercontent.com/mdecad2022/site-41023242/main/.gitignore \xa0 \xa0 \n 加入 main.py:\xa0\xa0 \xa0 https://raw.githubusercontent.com/mdecad2022/site-41023242/main/main.py \xa0 \xa0 \n 在倉儲根目錄加入\xa0\xa0 nocache.py, 內容如:\xa0\xa0 \xa0 https://github.com/mdecycu/cmsimde/blob/2a41b26b6d9b1446a8b448bb6fb58a6dbb41c867/nocache.py \xa0 \xa0 \n \n \n \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '在 Replit 執行動態網站: \xa0 \n 必須進入 Shell, 在倉儲根目錄執行下列兩則指令 (取下子模組內容, 並安裝執行所需模組). \xa0 \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '\n Login to\xa0 https://mail.nfu.edu.tw \xa0 -\xa0 查看登入 stud.cycu.org 伺服器的帳號密碼, 帳號為 cad+學號, 密碼為四個字元, 包括數字與小寫英文字母 \xa0 \n 請到 excel 檔案\xa0 查詢 \xa0stud.cycu.org 中與帳號對應的近端 (給 127.0.0.1 使用, 9 開頭的 port) 與遠端 (給 stud.cycu.org, 8 開頭的 port) 埠號 \xa0 \n 修改可攜 Python 3.10.6 start.bat, 蓋掉第三行後重新啟動, 目的希望將操作系統的命令搜尋路徑放在可攜目錄搜尋路徑之後. \xa0 \n 重新啟動可攜程式環境, 在其中一個命令列, ssh\xa0\xa0 cad+學號@stud.cycu.org , 表示要使用 secure shell 遠端登入到 stud.cycu.org, 這是一台 Linux 主機, 安裝 Ubuntu 22.04 Server.(若使用的網路連線協定並無 IPv6,\xa0 可將系統的 proxy 設為 140.130.17.4:3128 kmolab/kmolab) \xa0 \n 在 ssh 登入畫面, 以 ssh-keygen 建立 key pairs, .ssh/id_rsa 為 private key, id_rsa.pub 為 public key \xa0 \n 設法利用 Filezilla, 以 sftp 安全的(Secure)檔案(File)傳輸(Transmission)協定(Protocol), 與 stud.cycu.org 伺服器連結. \xa0 \n 利用\xa0 Filezilla sftp 取下 id_rsa.pub, 登錄至 Github 帳號下的 Setting - >\xa0 SSH and GPG keys. \xa0 \n 對\xa0 server sftp 也可以利用\xa0\xa0 Filezilla portable , 以圖形介面完成. 而 ssh 也可以透過\xa0 putty.exe 執行遠端登入. \xa0 \n 接下來要下載\xa0\xa0 config \xa0設定檔案,\xa0 以 sftp 放入 stud.cycu.org 主機的 .ssh 目錄中. \xa0 \n 接下來要在\xa0 Ubuntu (也就是 stud.cycu.org 這台主機所安裝的操作系統) 中, 設定 .gitconfig, 總共包含三項設定: git config --global user.name "scrum-1", git config --global user.email\xa0 "scrum1@mde.tw"\xa0\xa0 以及 git config --global http.proxy http://p42.cycu.org:3128, 這三個設定必須在 ssh 登入畫面中執行, 設定完成檔案會存入帳號根目錄中的 .gitconfig \xa0 \n 利用\xa0 git clone --recurse-submodules\xa0\xa0 git@demo:mdecad2022/site-scrum-1.git \xa0 demo \xa0 \n 接著下載\xa0 server.py , 在 Windows 編輯\xa0 server.py , 將個人分配到的 9xxxx 埠號填入後存檔, 以 sftp 放入上列取下的倉儲根目錄. \xa0 \n 登入\xa0 Ubuntu 後, 會使用的指令: pwd 代表 print working directory, clear -\xa0 清除螢幕, cd - 更換目錄, ls -l 列出目錄詳細內容, chmod u+x\xa0 acp \xa0表示讓 user 可以 execute acp script (能夠讓使用者以 source acp 加上提交字串進行 git add, git commit, git push, 如何在 Windows 執行 acp.bat 加上提交字串. \xa0 \n \n \xa0 \n 心得:我在第五週的時候很卡，於是我都留下來詢問老師，做到好，聽到懂，蠻難的。 \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '\n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '將acp加入自己的倉儲裡面，可以直接在靜態網站推上去倉儲 \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w8-9', 'text': '截圖 \n \n \n \n', 'tags': '', 'url': 'w8-9.html'}, {'title': 'w10', 'text': '開始由各分組提供考試題庫 \n \n 已知  block.prt  中 p8=59, p9=44, 請利用網際表單, 將 p8, p9 都改為 50 之後, 在瀏覽中提供新的 block_new.prt 檔案下載, 並直接在網頁上展示該零件的 STL 格式檔案. \n \n \n /downloads/41023138.stl \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': '\n \n \n 建立 TCExam 題庫 \n \n \n \n \n 各分組如何建立 TCExam 線上考試系統的題庫? \n \n 啟動可攜 Python 程式系統後, 在命令列中輸入 leo, 開啟 Leo Editor. \n 下載  tcexam_network_setting_cadlab.leo , 以 Leo Editor 開啟. \n 了解如何使用 Leo Editor. \n 各組組員根據下列規劃出題 \n \n \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': '題庫: \n /downloads/networking_cadlab_questions.xml \n /downloads/cad2022_w1-w3_questions.xml \n /downloads/cad2022_w5-6-video_questions.xml \n /downloads/cad2022_solvespace_questions.xml \n /downloads/cad2022_nx-part_questions.xml \n /downloads/cad2022_w4-video_questions.xml \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '\n \n Solvespace 編譯繪圖與應用 \n \n \n \n \n \n \n \n \n Solvespace 參數繪圖套件編譯過程, 請參考  1 ,  2 ,  3  教學影片說明. \n 單軸旋轉零組件繪製與應用, 請參考 教學影片 說明. \n 請將上述編譯與應用流程實習內容, 放到個人 HW (h1) 中的 w13 (h2) 頁面. \n 零組件繪圖之後再利用 NX2027 與 Onshape 進行繪製與轉檔. \n \n 參考檔案: \n \n solvespace_compiled_with_msys2.7z \n \n w12_solvespace_copsim.7z \n \n \n 實習倉儲 與 靜態網頁 \n \n \n \n \n \n \n \n \n \n我已經下載了，也大看了老師的教學影片，基本操作大概會了 \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': '', 'tags': '', 'url': 'w14.html'}, {'title': 'Solvespace', 'text': 'Solvespace 編譯繪圖與應用 題目練習 \n /downloads/41023138.htm \n /downloads/41023138.slvs \n /downloads/untitled.slvs \n /downloads/untitled.slvs-1.slvs \n /downloads/untitled.slvs-2.slvs \n /downloads/零件2.htm \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'w15', 'text': '/downloads/w15作業.wnk \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n', 'tags': '', 'url': 'w15.html'}]};