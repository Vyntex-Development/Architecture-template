import classes from "./ProjectMain.module.css";
import Link from "../../UI/Link";
import Image from "next/image";
import { useRouter } from "next/router";
import { PROJECTCMS_PAGE } from "../../../utils/utils";

const ProjectMain = () => {
  const { pathname } = useRouter();
  return (
    <div className="container">
      <div
        className={`${classes.ContainerMain} ${
          pathname === PROJECTCMS_PAGE ? classes.CmsStyle : ""
        }`}
      >
        <div className={classes.MainWrapper}>
          <div className={classes.MainItemWrapper}>
            <Link type="project" href="/projectCms">
              <div className={classes.MainItem}>
                <h2>Creating central hubs and workspaces</h2>
                <div className={classes.DetailsWrapper}>
                  <div className={classes.DescriptionWrapper}>
                    <p>Berlin, Germany</p>
                    <p>Nav 21’ - Jan 22’</p>
                  </div>
                  <div className={classes.ProjectArrow}>
                    <Image
                      layout="fixed"
                      objectFit="fill"
                      alt="icon"
                      width={32}
                      height={16}
                      src="/images/project_arrow.png"
                    ></Image>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className={classes.ProgressWrapper}>
            <div className={classes.Progress}></div>
          </div>
        </div>
        <div className={classes.MainWrapper}>
          <div className={classes.MainItemWrapper}>
            <Link type="project" href="/projectCms">
              <div className={classes.MainItem}>
                <h2>Luxurious gateways and historic restorations</h2>
                <div className={classes.DetailsWrapper}>
                  <div className={classes.DescriptionWrapper}>
                    <p>Berlin, Germany</p>
                    <p>Nav 21’ - Jan 22’</p>
                  </div>
                  <div className={classes.ProjectArrow}>
                    <Image
                      layout="fixed"
                      objectFit="fill"
                      alt="icon"
                      width={32}
                      height={16}
                      src="/images/project_arrow.png"
                    ></Image>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className={classes.ProgressWrapper}>
            <div className={classes.Progress}></div>
          </div>
        </div>
        <div className={classes.MainWrapper}>
          <div className={classes.MainItemWrapper}>
            <Link type="project" href="/projectCms">
              <div className={classes.MainItem}>
                <h2>A new flavour of office planning and design</h2>
                <div className={classes.DetailsWrapper}>
                  <div className={classes.DescriptionWrapper}>
                    <p>Berlin, Germany</p>
                    <p>Nav 21’ - Jan 22’</p>
                  </div>
                  <div className={classes.ProjectArrow}>
                    <Image
                      layout="fixed"
                      objectFit="fill"
                      alt="icon"
                      width={32}
                      height={16}
                      src="/images/project_arrow.png"
                    ></Image>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className={classes.ProgressWrapper}>
            <div className={classes.Progress}></div>
          </div>
        </div>
        <div className={classes.MainWrapper}>
          <div className={classes.MainItemWrapper}>
            <Link type="project" href="/projectCms">
              <div className={classes.MainItem}>
                <h2>Luxury hospitality in a metropolitan setting</h2>
                <div className={classes.DetailsWrapper}>
                  <div className={classes.DescriptionWrapper}>
                    <p>Berlin, Germany</p>
                    <p>Nav 21’ - Jan 22’</p>
                  </div>
                  <div className={classes.ProjectArrow}>
                    <Image
                      layout="fixed"
                      objectFit="fill"
                      alt="icon"
                      width={32}
                      height={16}
                      src="/images/project_arrow.png"
                    ></Image>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className={classes.ProgressWrapper}>
            <div className={classes.Progress}></div>
          </div>
        </div>
        <div className={classes.MainWrapper}>
          <div className={classes.MainItemWrapper}>
            <Link type="project" href="/projectCms">
              <div className={classes.MainItem}>
                <h2>Learning spaces that increase productivity</h2>
                <div className={classes.DetailsWrapper}>
                  <div className={classes.DescriptionWrapper}>
                    <p>Berlin, Germany</p>
                    <p>Nav 21’ - Jan 22’</p>
                  </div>
                  <div className={classes.ProjectArrow}>
                    <Image
                      layout="fixed"
                      objectFit="fill"
                      alt="icon"
                      width={32}
                      height={16}
                      src="/images/project_arrow.png"
                    ></Image>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className={classes.ProgressWrapper}>
            <div className={classes.Progress}></div>
          </div>
        </div>
        <div className={classes.MainWrapper}>
          <div className={classes.MainItemWrapper}>
            <Link type="project" href="/projectCms">
              <div className={classes.MainItem}>
                <h2>A warm and authentic vacation rental</h2>
                <div className={classes.DetailsWrapper}>
                  <div className={classes.DescriptionWrapper}>
                    <p>Berlin, Germany</p>
                    <p>Nav 21’ - Jan 22’</p>
                  </div>
                  <div className={classes.ProjectArrow}>
                    <Image
                      layout="fixed"
                      objectFit="fill"
                      alt="icon"
                      width={32}
                      height={16}
                      src="/images/project_arrow.png"
                    ></Image>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className={classes.ProgressWrapper}>
            <div className={classes.Progress}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMain;
