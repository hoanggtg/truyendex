import FeaturedTitles from "@/sections/nettrom/trang-chu/featured-titles";
import NewUpdates from "@/sections/nettrom/common/new-updates";
import ReadingHistory from "@/sections/nettrom/trang-chu/reading-history-table";
import TopTitles from "@/sections/nettrom/common/top-titles-table";

export const metadata = {
    title: 'Đọc Truyện Tranh Online - Website chính thức - NetTrom',
    description: 'Web đọc truyện tranh online lớn nhất được cập nhật liên tục mỗi ngày - Cùng tham gia đọc truyện và thảo luận với hơn 💚10 triệu thành viên tại NetTrom',
};

export default function Nettrom() {
    return (
        <>
            <FeaturedTitles />
            <div className="row">
                <div id="ctl00_divCenter" className="center-side col-md-8">
                    <NewUpdates />
                </div>
                <div className="right-side col-md-4 cmszone" id="ctl00_divRight">
                    <ReadingHistory />
                    <TopTitles />
                </div>
            </div>
        </>
    )
}