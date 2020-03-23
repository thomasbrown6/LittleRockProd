import React from "react";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import CardWrapper from "../../components/CardWrapper";
import { Row, Col } from "react-bootstrap";
//import { Container, Row, Col, Card } from "react-bootstrap";

export default () => (
  <Layout>
    <div>
      <Banner
        id="banner"
        image={require("../../static/images/LR-WebPage-OurStaffNW_vrt.jpg")}
        headerText="Our Staff"
        Breadcrumb1="HOME"
        tag1="a"
        href1="/"
        Breadcrumb2="WHO WE ARE"
        tag2="a"
        href2="#"
        Breadcrumb3="Our Staff"
        tag3="span"
      />

      <div className="secondary">
        <section id="two">
          <div className="inner">
            <CardWrapper>
              <Card
                image={"../../static/images/bios/rev_dr_james_armstrong.png"}
                header="Rev. Dr. James Armstrong, BA, MA, MDiv, Hon. D. D."
                subhead="Rev. Dr. James D. Armstrong, BA, MA, MDiv, Hon. D. D. Retired
                  General Officer of the A.M.E. Zion Church"
                email="Jaarmstrong23@carolina.rr.com"
              >
                <p>
                  Rev. Dr. James Armstrong is a native of Charlotte, North
                  Carolina. He is a retired General Officer of the A.M.E. Zion
                  Church. Education: BA, Livingstone College MA, Scarriatt
                  College MDiv, Hood Theological Seminary Honorary Doctorate
                  Divinity Hood Theological Seminary.{" "}
                </p>
                <p>
                  {" "}
                  Affiliations/Membership in Other Organizations: American
                  Methodist History and Archives Association; American
                  Association of Archivist; American Association of State and
                  Local Historians; Buncombe County Human Relations Council,
                  Chairman; Buncombe County Housing Authority; NAACP Asheville,
                  NC ,President; Congress of Racial Equality (CORE), Chairman;
                  Fellowship of Black Churches, Hackensack, NJ; Ministerial
                  Alliance New Brittain, Connecticut.
                </p>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                image={"../../static/images/bios/rev_rebecca_warren.jpg"}
                header="Reverend G. Rebecca Warren, BA"
                subhead="Reverend G. Rebecca Warren, BA
                  Minister of Discipleship and Facilities Management"
                email="grebeccawarren@gmail.com"
              >
                <p>
                  Reverend Warren is a native of Vidalia, Georgia and currently
                  serves as the Minister of Discipleship and Facilities
                  Management. She is a graduate of Livingstone College located
                  in Salisbury, North Carolina where she received a B.A. in
                  Religious Studies. Reverend Warren is a Certified GriefShare
                  Facilitator and Interim Executive Director of Little Rock
                  Community Development Corporation.{" "}
                </p>
                <p>
                  {" "}
                  Affiliations/Membership in Other Organizations: Mecklenburg
                  County Sherriff Faith-Based Advisory Board, Sickle Cell and
                  Community Health Organization, Minority Health Task Force, and
                  Copy Editor, A.M.E. Zion Church, Quarterly Review;
                  Charlotte-Mecklenburg Branch; NAACP Women In (WIN)
                  Chairperson; Top Ladies of Distinction, Inc.(TLOD), Chaplain;
                  Order of Eastern Star, PHA, Christian Workers #301, PHA;
                  Chaplain, Loyal Lady, Zack Alexander Assembly No. 35; Order of
                  the Golden Circle, ASSR-PHA, Illustrious Commandress, Rameses
                  Court #78 Daughters; Daughters of Constituent Court of the
                  Daughters of Imperial Court Auxiliary to the Imperial Council
                  of A.E.A.O.N.M.S and Alpha Kappa Mu National Honor Society
                  (Alpha Psi Chapter), Alpha Sigma Lambda National Honor Society
                  for Adult Students in Continuing Higher Education (Nu Zeta).
                </p>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                image={"../../static/images/bios/rev_belinda_austin.jpg"}
                header="Rev. Belinda Austin, BA,MA"
                subhead="Rev. Belinda Austin, BA,MA Minister of Evangelism"
                email="Bgaustin03@hotmail.com"
              >
                <p>
                  Rev. Belinda Austin is a native of Mexia, Texas. She serves as
                  Minister of Evangelism, Prayer Ministry Coordinator and New
                  Member class teacher. associate minister at Little Rock A.M.E.
                  Zion Church in the following ministries: Minister of
                  Evangelism- overseeing some 18 outreach ministries which seek
                  to win souls to Jesus Christ Prayer Ministry Coordinator –
                  facilitate weekly intercessory prayer and coordinate
                  volunteers who monitor the sanctuary giving people in the
                  community the opportunity to meditate and pray three times a
                  week. New Member Class Teacher – developed and teach Power
                  Point Presentation of six classes taught each week to all new
                  members joining the church.{" "}
                </p>
                <p>
                  {" "}
                  Affiliations/Membership in Other Organizations: Trained
                  Facilitator of the American Bible Society – Bible Study:
                  “Loving the Neighbor Who Doesn’t Look Like You”; Local
                  Campaign Chairperson: Walker for Zion 2020 (Dr. Dwayne A.
                  Walker, Candidate for Bishop); Bachelor of Arts Degree in
                  Community Health Education: Washburn University, Topeka,
                  Kansas Master of Arts Degree in Christian Leadership: Gordon
                  Conwell Theological Seminary, Charlotte, North Carolina.
                </p>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                image={"../../static/images/bios/rev_sonya_gail_campbell.jpg"}
                header="Rev. Sonya Gail Campbell, M.Div"
                subhead="Rev. Sonya Gail Campbell, M.Div
                Minister of Counseling"
                email="mscampbell2@hotmail.com"
              >
                <p>
                  Rev. Sonya Gail Campbell, M.Div was born and raised in New
                  York City. Rev. Campbell currently serves in the following
                  ministries: Counseling Ministry, Street Ministry, Substance
                  Abuse Ministry, Youth Bible Study, Class Leader, AME Zion Heal
                  Partnership Women Seeking Wisdom.
                </p>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                image={"../../static/images/bios/rev_james_howard.jpg"}
                header="Rev. James Howard Lenoir, BS, MS"
                subhead="Rev. James Howard Lenoir, BS, MS
                Minister of Christian Education"
                email="Jameslenoir2@gmail.com"
              >
                <p>
                  Reverend James Howard Lenoir is a native of Charlotte, North
                  Carolina. Rev. Lenoir currently serves as the Superintendent
                  of Sunday School, Class Leader, Adult Sunday School Teacher,
                  Support Leader, North Charlotte Evangelism Committee and
                  Prayer monitor.{" "}
                </p>
                <p>
                  {" "}
                  Affiliations/Membership in Other Organizations: Prince Hall
                  Free and Accepted Mason Lodge # 7; Ruth Boger #669 Order of
                  the Eastern Stars; Alpha Phi Alpha Fraternity Incorporated.
                </p>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                image={"../../static/images/bios/rev_deanna_michelle.jpg"}
                header="Rev. Deanna Michelle Courtney Rambert, BS"
                subhead="Rev. Deanna Michelle Courtney Rambert, BS
                Minister of Counseling"
                email="ramcourt@bellsouth.net"
              >
                <p>
                  Reverend Deanna Michelle Courtney Rambert is a native of
                  Richmond, Virginia. Rev. Rambert currently serves as Minister
                  of Counseling, Elder and Conference Evangelist in the Western
                  North Carolina Conference of the African Methodist Episcopal
                  Zion Church, Class Leader of 64 members at Little Rock A.M.E.
                  Zion Church and leader of Little Rock’s Women of Worth Annual
                  Women's Conference.{" "}
                </p>
                <p>
                  {" "}
                  Affiliations/Membership in Other Organizations: Health Equity
                  Advocate Liaison (HEAL) Ministry and Executive Committee
                  Member of A.M.E. Zion and Duke Health Partnership.
                </p>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                image={"../../static/images/bios/rev_anthony_redfearn.jpg"}
                header="Rev. Anthony Redfearn"
                subhead="Rev. Anthony Redfearn
                Minister of Counseling"
                email="ant1239@carolina.rr.com"
              >
                <p>
                  Rev. Anthony Redfearn is a native of Chesterfield, South
                  Carolina. Rev. Redfearn is an Associate Minister, credentialed
                  as Nationally Certified Counselor, Licensed Profession
                  Counselor, Licensed Clinical Addictions Specialist, Licensed
                  Marriage and Family Therapist Associate, and North Carolina
                  Certified Peer Support Specialist.
                </p>
                <p>
                  {" "}
                  Affiliations/Membership in Other Organizations: Currently
                  employed in his owned and operated private practice, The
                  Matthew House Counseling Center, Charlotte NC; Program Service
                  Developer with ECO (Energy Committed to Offenders); Recovery
                  Coach; Facilitator of the Prepare/Enrich Marriage Program;
                  American Counseling Association (ACA).
                </p>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                image={"../../static/images/bios/glain.jpg"}
                header="Glain Lewis, Administrative Assistant"
                subhead="Glain Lewis, Administrative Assistant"
              >
                <p>
                  Glain Dell Haynes-Lewis, a native of Dorchester, South
                  Carolina. Currently serve as the Administrative Assistant to
                  the Pastor. Glain is a member of the Board of Deaconess, a
                  Class Leader, a member of the Culinary Ministry, and a
                  recipient of the 2017 “Excellence in Ministry Award,” Glain
                  Haynes Lewis has a Bachelor of Science degree. She is the
                  mother of two children, Dr Marquita Wenonah Lewis-Thames
                  (Anthony) and T. William Lewis.
                </p>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                image={"../../static/images/bios/rev_barbara_summey.jpg"}
                header="Rev. Dr. Barbara Summey Marshall"
                subhead="Rev. Dr. Barbara Summey Marshall 
                Outreacch Evangelism"
                email="womenvets@hotmail.com"
              >
                <p>
                  Dr. Marshall is a native of the prodigious mountains of NC.
                  She proudly served for more than a decade in the United States
                  Navy as a Chaplain. She currently provides transitional
                  support, pastoral care, lodging assistance and legal referrals
                  for homeless Veterans and others. She is the proud Mother of
                  two altruistic adult children.
                </p>
                <p>
                  {" "}
                  Affiliations/Membership in Other Organizations: Founder of
                  Steps & Stages/Jubilee House for Homeless Women Vets; Delta
                  Sigma Theta Incorporated.
                </p>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                image={"../../static/images/bios/bro_brandon_smith.png"}
                header="Bro. Brandon Smith"
                subhead="Bro. Brandon Smith 
                Minister of Young Adults"
                email="brandonjvsmith@gmail.com"
              >
                <p>
                  Bro. Brandon J. Smith is a native of Charlotte North Carolina.
                  He currently serves as the Minister of Young Adults. He is the
                  Former Executive President for the Varick International
                  Christian Youth Council for the A.M.E. Zion Church. He
                  currently serves in many capacities in the Ecumenical
                  Community, with the National Council of Churches and other
                  organizations.
                </p>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                image={"../../static/images/bios/sis_diane_commander.jpg"}
                header="Sister Diane Commander, BA"
                subhead="Sister Diane Commander, BA 
                Assistant Minister of Evangelism"
                email="commanderworks@gmail.com"
              >
                <p>
                  Sister Diane Commander was born in Charlotte, North Carolina
                  and received her early education in the Charlotte-Mecklenburg
                  School System. She is a graduate of The University of North
                  Carolina-Charlotte where she received the Bachelor of Arts
                  Degree in Sociology. She has been a member of Little Rock
                  A.M.E. Zion Church for 51 years and currently serves as a
                  Local Preacher. Other service includes: Intermediate Sunday
                  Church School Teacher, Assistant Minister on the Board of
                  Evangelism; Secretary of the Local Committees of the Walker
                  for Zion 2020 Campaign and Director of the Public Relations
                  Ministry. She is the proud mother of one living daughter,
                  Dianna Davis, extremely proud grandmother of seven and great
                  grandmother of 10.
                </p>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                image={"../../static/images/bios/mr_larry_austin.jpg"}
                header="Mr. Larry Austin"
                subhead="Mr. Larry Austin 
                Board of Stewards, Chairman"
                email="laustin@carolina.rr.com"
              >
                <p>
                  Mr. Larry Austin is a native of Mccaulley, Texas. Mr. Austin
                  currently serves as the Chairman of the Board of Stewards and
                  serves on the Little Rock Community Development Corporation.
                </p>
                <p>
                  {" "}
                  Affiliations/Membership in Other Organizations: President of
                  Lowtech Capital, LLC; Graduated in 1974 from University of
                  North Texas.
                </p>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                image={"../../static/images/bios/mr_carl_daniel.jpg"}
                header="Mr. Carl Daniel, MBA"
                subhead="Mr. Carl Daniel, MBA 
                Board of Trustees, Chairman"
                email="Cddaniel53@yahoo.com"
              >
                <p>
                  Mr. Carl Daniel is a native of Orange, Virginia. Mr. Daniel
                  currently serves as Chairperson of Little Rock AME Zion Board
                  of Trustees, and Vice Chairman of the Little Rock Community
                  Development Corporation.
                </p>
                <p>
                  {" "}
                  Affiliations/Membership in Other Organizations: United States
                  Marine Corps, Ceremonial and Presidential Guard, Honorable
                  Discharge; Pfeiffer University, Charlotte – MBA; Past Board
                  Member: Charlotte Country Day School Trustee Board; Speedway
                  Children’s Charities and Youth Home, Inc.; American Water
                  Works Association; Water Environment Federation; NC Waterworks
                  Operators Association and Silver Set Masonic Lodge #327.
                </p>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                image={"../../static/images/bios/ms_christy_bryant.jpg"}
                header="Ms. Christy Bryant"
                subhead="Ms. Christy Bryant 
                Comptroller"
                email="christybryant@windstream.net"
              >
                <p>
                  Christy R. Bryant is a native of Ashland, Virginia. Ms. Bryant
                  currently serves as Comptroller of the Church, member of the
                  Board of Trustees and member of the Culinary Ministry.
                </p>
                <p>
                  {" "}
                  Affiliations/Membership in Other Organizations: Little Rock
                  A.M.E. Zion Church Community Development Corporation, Board
                  member; Altrusa International of Charlotte, NC Inc., President
                  (06/2019 – 05/2020); Urban Financial Services Coalition Inc.,
                  National Secretary; Delta Sigma Theta Sorority, Inc.,
                  Charlotte Alumnae Chapter, member.
                </p>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                image={"../../static/images/bios/mrs_roye_buck.jpg"}
                header="Mrs. Roye Buck"
                subhead="Mrs. Roye Buck 
                W.H. & O.M Society, President"
                email=""
              >
                <p>
                  Mrs. Buck is a native of Charlotte, North Carolina and a
                  lifelong member of Little Rock AME Zion Church. Ms. Buck
                  currently serves as President of the Local Women's Home and
                  Overseas Missionary Society, which has six departments: Parent
                  Body (Ages 41 years and up); Young Adult Missionaries (Ages
                  22-40); Youth Missionaries (Ages 13-21); Buds of Promise
                  Juvenile Missionaries (Ages 1-12); Bureau of Supply (All ages)
                  and Life Members (All ages). The WH&OMS is responsible for
                  globally supporting the AME Zion Church financially,
                  particularly its educational institutions. We also provide
                  support to the Janie Speaks Hospital in Ghana. Locally, our
                  projects include A Child's Place; Safe Alliance (battered
                  women's shelter); Salvation Army Shelter (food and clothing
                  for homeless) and Toys for Tots. Our inreach projects with
                  Little Rock include ongoing support of the Street Ministry,
                  providing personal items and snacks for "blessing bags". We
                  have also provided personal items to the Bread of Life
                  ministry which provides meals and clothing for the homeless on
                  Saturdays.
                </p>
                <p>
                  Mrs. Buck also serves as President of the Local Home Missions
                  Board, whose function is to raise funds to help churches on
                  the North Charlotte District make repairs to their buildings
                  and retire the debt on Camp Dorothy Walls Conference and
                  Retreat Center in Black Mountain, North Carolina.
                </p>
                <p>
                  {" "}
                  Affiliations/Organizations: Church Women United, Democratic
                  Women of Mecklenburg County, Democracy North Carolina,
                  National Council of Negro Women and Charlotte Alumnae Chapter,
                  Delta Sigma Theta Sorority, Incorporated.
                </p>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                image={"../../static/images/bios/mrs_antoinette_cody.jpg"}
                header="Mrs. Antoinette Cody"
                subhead="Mrs. Antoinette Cody 
                Christian Education, Director"
                email="acody13@yahoo.com"
              >
                <p>
                  Native Town: Kinston, NC Current Position: Director of
                  Christian Education Affiliations/Membership in Other
                  Organizations: Charlotte Alumni Chapter Livingstone College,
                  Charlotte; Alumnae Chapter Delta Sigma Theta Sorority, Inc.
                </p>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                image={"../../static/images/bios/ms_gloria_joyner.jpg"}
                header="Ms. Gloria Joyner-Johnson"
                subhead="Ms. Gloria Joyner-Johnson 
                Lay Council, President"
                email="gloriajo6812@gmail.com"
              >
                <p>
                  Ms. Joyner-Johnson is a native of Conway, North Carolina. She
                  currently serves as local Lay Council President and a member
                  of the Board of Trustees.
                </p>
                <p>
                  {" "}
                  Affiliations/Membership in Other Organizations: Delta Sigma
                  Theta Sorority, Inc.; Livingstone College Alumni Association;
                  American Association of Blood Banks
                </p>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                image={"../../static/images/bios/ms_gayle_tabron.png"}
                header="Ms. Gayle Tabron"
                subhead="Ms. Gayle Tabron 
                Office Assistant"
                email=""
              >
                <p>
                  Ms. Tabron is a native of Washington, DC and grew up in
                  Cleveland, Ohio. She has served as the Office Assistant since
                  2008, performing a variety of tasks as directed by the Pastor
                  or Administrative Assistant. Ms. Tabron also serves as a
                  member of the Culinary Ministry.
                </p>
              </Card>
            </CardWrapper>

            <CardWrapper>
              <Card
                image={"../../static/images/bios/mr_gilbert_mcrae.jpg"}
                header="Mr. J. Gilbert McRae"
                subhead="Mr. J. Gilbert McRae 
                Leader of Leaders"
                email="mcraejg@bellsouth.net "
              >
                <p>
                  Mr. Gilbert McRae is a native of Stamford, Connecticut and
                  currently serves as Leader of Leaders, leading our new
                  member’s class and distribution information to members through
                  our Class Leader System.
                </p>
                <p>
                  Mr. McRae is a lifelong member of Little Rock and serves in a
                  host of other capacities including: Board of Trustees; Sunday
                  Church School, Lay Chairperson; District Director- Christian
                  Education, North Charlotte District; Secretary, North
                  Charlotte District; Member, Board of Christian Education –
                  WNCC; Chairperson, Assembly of Christian Educators- WNCC;
                  Alternate Delegate, 51st. Quadrennial General Conference-2020.
                </p>
                <p>
                  {" "}
                  Affiliations/Membership in Other Organizations: Member,
                  Livingstone College National Alumni Association; Retired
                  Educator.
                </p>
              </Card>
            </CardWrapper>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
