import { FileText, Info, ShieldCheck, X } from 'lucide-react';

/*
 * Giới thiệu, Chính sách dữ liệu, Điều khoản (anh Bằng chốt 2026-11-12):
 * mọi trang con chottoday.com ghi người vận hành "Chiba Bang", liên hệ
 * support@chottoday.com, không công khai địa chỉ / điện thoại.
 */
export const OPERATOR = 'Chiba Bang';
export const CONTACT_EMAIL = 'support@chottoday.com';

const Contact = () => (
  <p>
    <strong className="text-on-surface">Người vận hành và liên hệ:</strong> {OPERATOR} ·{' '}
    <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2 hover:text-primary">{CONTACT_EMAIL}</a>
  </p>
);

const DOCS = {
  privacy: {
    icon: ShieldCheck,
    title: 'Chính sách xử lý dữ liệu hiện tại',
    sub: 'Áp dụng cho build production đang hiển thị.',
    body: (
      <>
        <p><strong className="text-on-surface">Không có tài khoản:</strong> Toolio không có đăng nhập và không hỏi tên, email của bạn.</p>
        <p><strong className="text-on-surface">Công cụ xử lý trên trình duyệt:</strong> file được đọc trong phiên trình duyệt và không được portal gửi lên server.</p>
        <p><strong className="text-on-surface">Công cụ gọi dịch vụ ngoài:</strong> một số công cụ (ví dụ tải hoá đơn điện tử) gửi mã tra cứu bạn nhập tới cổng của nhà cung cấp tương ứng khi bạn bấm chạy.</p>
        <p><strong className="text-on-surface">Công cụ cần backend/Antigravity:</strong> bị khóa khi runtime hoặc cơ chế xác thực chưa được phê duyệt. Portal không tự chuyển sang API model khác.</p>
        <p><strong className="text-on-surface">Lưu giữ:</strong> production hiện không có kho lưu file phía server. Cài đặt và tiến độ checklist lưu trong trình duyệt của bạn. Nếu backend upload được bật sau này, file tạm phải được xóa khi request kết thúc và chính sách retention phải được công bố tại đây.</p>
        <p><strong className="text-on-surface">Dịch vụ hạ tầng:</strong> trang chạy trên Cloudflare; Cloudflare Web Analytics đếm lượt xem (theo Cloudflare: không dùng cookie, không dùng địa chỉ IP để nhận ra bạn). Phông chữ tải từ Google Fonts nên Google nhận địa chỉ IP khi tải.</p>
        <p><strong className="text-on-surface">Đầu ra tài chính/pháp lý:</strong> chỉ mang tính tham khảo; người có thẩm quyền phải đối chiếu chứng từ nguồn trước khi sử dụng.</p>
        <Contact />
      </>
    ),
  },
  about: {
    icon: Info,
    title: 'Giới thiệu Toolio',
    sub: 'Công cụ nhỏ của ChottoDay.',
    body: (
      <>
        <p>Toolio là bộ công cụ nhỏ miễn phí cho người Việt ở Nhật: xử lý file, hoá đơn, bảng tính và các thủ tục thường gặp. Toolio là một phần của ChottoDay (chottoday.com) và đang ở giai đoạn beta có kiểm soát.</p>
        <p>Phần lớn công cụ chạy ngay trong trình duyệt, không cần tài khoản.</p>
        <Contact />
      </>
    ),
  },
  terms: {
    icon: FileText,
    title: 'Điều khoản sử dụng',
    sub: 'Dùng Toolio nghĩa là bạn đồng ý với các điều khoản này.',
    body: (
      <>
        <p><strong className="text-on-surface">Dịch vụ:</strong> Toolio miễn phí, đang ở giai đoạn beta; công cụ có thể thay đổi hoặc ngừng mà không báo trước.</p>
        <p><strong className="text-on-surface">Kết quả chỉ để tham khảo:</strong> kết quả tính toán, chuyển đổi và nội dung về thủ tục có thể sai hoặc đã cũ. Hãy đối chiếu với cơ quan, chứng từ gốc trước khi dùng cho việc quan trọng.</p>
        <p><strong className="text-on-surface">File của bạn:</strong> bạn chỉ xử lý file mà bạn có quyền dùng, và tự chịu trách nhiệm về nội dung đó.</p>
        <p><strong className="text-on-surface">Hành vi bị cấm:</strong> thu thập tự động (bot, crawl, scrape), gây quá tải hoặc tìm cách vượt qua các lớp bảo vệ của trang.</p>
        <p><strong className="text-on-surface">Thay đổi điều khoản:</strong> điều khoản có thể được cập nhật; tiếp tục dùng nghĩa là bạn chấp nhận bản mới.</p>
        <Contact />
      </>
    ),
  },
};


export default function DataPolicyModal({ isOpen, onClose, kind = 'privacy' }) {
  if (!isOpen) return null;
  const doc = DOCS[kind] ?? DOCS.privacy;
  const Icon = doc.icon;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="presentation"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="data-policy-title"
        className="w-full max-w-2xl rounded-2xl border border-border-subtle bg-surface-container p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="data-policy-title" className="flex items-center gap-2 text-lg font-bold text-on-surface">
              <Icon className="text-secondary" size={20} />
              {doc.title}
            </h2>
            <p className="mt-1 text-sm text-on-surface-variant">{doc.sub}</p>
          </div>
          <button onClick={onClose} aria-label="Đóng" className="rounded-lg p-2 text-outline hover:bg-surface-subtle hover:text-on-surface">
            <X size={18} />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm leading-6 text-on-surface-variant">
          {doc.body}
        </div>

        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity">Đã hiểu</button>
        </div>
      </section>
    </div>
  );
}
