import Link from "next/link";

type DevPreviewChromeProps = {
  livePath?: string;
  title?: string;
};

/**
 * Persistent banner for every /dev page so drafts are never mistaken for live.
 */
export function DevPreviewChrome({ livePath, title }: DevPreviewChromeProps) {
  return (
    <div className="dh-dev-preview-chrome" role="status">
      <div className="dh-dev-preview-chrome-inner">
        <p>
          <strong>개발 미리보기</strong>
          {title ? <span> · {title}</span> : null}
          <span> — 아직 공식 사이트에 반영되지 않았습니다.</span>
        </p>
        <div className="dh-dev-preview-chrome-actions">
          <Link href="/dev">개발 허브</Link>
          {livePath ? (
            <a href={livePath} target="_blank" rel="noreferrer">
              현재 라이브 보기
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
