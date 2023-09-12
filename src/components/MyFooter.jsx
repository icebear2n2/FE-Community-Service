const MyFooter = () => {
  return (
    <div
      style={{
        backgroundColor: "#f7f9fa",
        width: "1497px",
        height: "320px",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
      }}
    >
      <div
        style={{
          width: "1256px",
          height: "240px",
          marginTop: "40px",
          marginBottom: "40px",
          marginRight: "121px",
          marginLeft: "121px",
          padding: "0 60px 0 60px",
        }}
      >
        <div
          style={{
            width: "253px",
            height: "240px",
            borderRight: "1px solid #EAEDEF",
            float: "left",
            marginRight: "30px",
          }}
        >
          <div>
            <a
              href="#"
              style={{
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "20px",
                color: "#2f3438",
              }}
            >
              고객센터
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                  <path
                    fill="#000000"
                    d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z"
                  />
                </g>
              </svg>
            </a>
            <div style={{ marginTop: "20px" }}>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  paddingRight: "6px",
                  lineHeight: "20px",
                  color: "2f3438",
                }}
              >
                1544-1544
              </span>
              <span style={{ fontSize: "14px" }}>09:00~18:00</span>
            </div>
            <p
              style={{
                fontSize: "12px",
                lineHeight: "20px",
                letterSpacing: "-0.3px",
                color: "2f3438",
              }}
            >
              평일: 전체 문의 상담 가능 주말,
              <tr />
              공휴일: 오늘의집 직접배송, 이사/시공/제품설치 <tr />
              문의 상담 가능
            </p>
          </div>
          <div
            style={{
              width: "187px",
              height: "32px",
              fontSize: "14px",
              lineHeight: "20px",
              boxShadow: "none",
              borderRadius: "4px",
              border: "1px solid #EAEDEF",
              marginBottom: "12px",
              textAlign: "center", // 텍스트 가운데 정렬
              display: "flex",
              alignItems: "center", // 수직 가운데 정렬
              color: "2f3438",
            }}
          >
            <span style={{ padding: "0 8px 0 8px", whiteSpace: "nowrap" }}>
              카톡 상담(평일 09:00~18:00)
            </span>
          </div>
          <div
            style={{
              width: "82px",
              height: "32px",
              fontSize: "14px",
              lineHeight: "20px",
              boxShadow: "none",
              borderRadius: "4px",
              border: "1px solid #EAEDEF",
              textAlign: "center", // 텍스트 가운데 정렬
              display: "flex",
              alignItems: "center", // 수직 가운데 정렬
              color: "2f3438",
            }}
          >
            <span style={{ padding: "0 8px 0 8px", whiteSpace: "nowrap" }}>
              이메일 문의
            </span>
          </div>
        </div>
        <div className="container">
          <div
            className="row row-cols-2"
            style={{
              width: "253px",
              height: "240px",
              borderRight: "1px solid #EAEDEF",
              marginRight: "30px",
              color: "#424242",
            }}
          >
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              회사소개
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              입점신청
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              채용정보
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              제휴/광고 문의
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              이용약관
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              사업자 구매 회원
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              개인정보 처리방침
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              시공파트너 안내
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              공지사항
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              상품광고 소개
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              안전거래센터
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              고객의 소리
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyFooter;
