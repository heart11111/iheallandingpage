import Link from "next/link";
import { CorporateFooter } from "@/components/CorporateParts";
import { DevPreviewChrome } from "@/components/DevPreviewChrome";
import { NavBar } from "@/components/NavBar";
import { draftRegistry, getOpenDrafts } from "@/dev/registry";

const statusLabel: Record<string, string> = {
  empty: "작성 중",
  ready: "검토 대기",
  published: "퍼블리시 완료",
};

export default function DevHubPage() {
  const openDrafts = getOpenDrafts();

  return (
    <div className="dh-page dh-dev-page">
      <DevPreviewChrome title="허브" />
      <NavBar />
      <main>
        <section className="dh-dev-hub">
          <div className="dh-container">
            <p className="dh-kicker">INTERNAL · DEV PREVIEW</p>
            <h1>개발 미리보기</h1>
            <p className="dh-dev-hub-lead">
              수정은 먼저 여기 <code>/dev</code> 아래에 올립니다. 라이브 페이지는 그대로 두고,
              &ldquo;퍼블리시&rdquo;라고 하시면 그때 본 사이트에 완전히 반영합니다.
            </p>

            <div className="dh-dev-hub-steps">
              <article>
                <span>01</span>
                <h2>초안 수정</h2>
                <p>요청하신 변경을 <code>/dev/...</code> 페이지에만 적용합니다.</p>
              </article>
              <article>
                <span>02</span>
                <h2>미리보기 확인</h2>
                <p>
                  배포 후 <code>biolabjp.com/dev/</code>에서 초안을 확인합니다. 메뉴에는
                  노출되지 않습니다.
                </p>
              </article>
              <article>
                <span>03</span>
                <h2>퍼블리시</h2>
                <p>
                  &ldquo;퍼블리시 / 반영 / 배포&rdquo;라고 하시면 초안을 실제 URL에 옮기고
                  라이브에 올립니다.
                </p>
              </article>
            </div>

            <div className="dh-dev-hub-list">
              <div className="dh-dev-hub-list-head">
                <h2>대기 중인 초안</h2>
                <p>{openDrafts.length}건</p>
              </div>

              {openDrafts.length === 0 ? (
                <div className="dh-dev-hub-empty">
                  <p>지금 열린 초안이 없습니다.</p>
                  <p>다음에 페이지 수정을 요청하시면 여기에 미리보기 링크가 생깁니다.</p>
                </div>
              ) : (
                <ul>
                  {openDrafts.map((draft) => (
                    <li key={draft.id}>
                      <div>
                        <p className="dh-dev-hub-status" data-status={draft.status}>
                          {statusLabel[draft.status] || draft.status}
                        </p>
                        <h3>{draft.title}</h3>
                        <p>{draft.note}</p>
                        <p className="dh-dev-hub-meta">
                          미리보기 <code>{draft.previewPath}</code>
                          {" → "}
                          라이브 <code>{draft.livePath}</code>
                          {" · "}
                          {draft.updatedAt}
                        </p>
                      </div>
                      <Link href={draft.previewPath}>초안 보기</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {draftRegistry.some((entry) => entry.status === "published") ? (
              <p className="dh-dev-hub-footnote">
                퍼블리시가 끝난 초안은 보관만 하거나 정리합니다. 라이브 URL이 최종본입니다.
              </p>
            ) : null}
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
