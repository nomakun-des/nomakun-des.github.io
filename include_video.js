function Videos() {
    video_all_link = "";

    for (let i = video_list.length - 1; i > -1; i--) {
        video_all_link +=
                "<a class='linkImg' href='" + video_list[i][0] + "_" + video_list[i][1] + "-" + video_list[i][2] + ".html'>" + video_list[i][3] + " <font size='-2'>(20" + video_list[i][0] + "-" + video_list[i][1] + "-" + video_list[i][2] + ")</font>" +
                "    <span><img width='200' src='http://img.youtube.com/vi/" + video_list[i][4] + "/mqdefault.jpg'></span>" +
                "</a><br>";
    }

    document.write(video_all_link);
}
