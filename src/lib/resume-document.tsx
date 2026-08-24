import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";
import { resume } from "../../other/resume";

/** Compact one-page tech resume. Keep content in other/resume.ts lean. */
const C = {
  ink: "#0b1220",
  body: "#1a2332",
  muted: "#5b6b7c",
  line: "#d5dde6",
  signal: "#c45c26",
  panel: "#f3f5f7",
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingBottom: 24,
    paddingHorizontal: 32,
    fontFamily: "Helvetica",
    fontSize: 8.5,
    color: C.body,
  },
  topRule: {
    height: 3,
    backgroundColor: C.signal,
    marginBottom: 14,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
    gap: 16,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    alignItems: "flex-end",
    maxWidth: 200,
  },
  name: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.2,
    color: C.ink,
    lineHeight: 1.15,
  },
  title: {
    marginTop: 3,
    fontSize: 9,
    fontFamily: "Courier-Bold",
    color: C.signal,
    letterSpacing: 0.4,
    lineHeight: 1.3,
  },
  contactItem: {
    fontSize: 7.5,
    fontFamily: "Courier",
    color: C.muted,
    lineHeight: 1.45,
    textAlign: "right",
  },
  link: {
    fontSize: 7.5,
    fontFamily: "Courier",
    color: C.signal,
    textDecoration: "none",
    lineHeight: 1.45,
    textAlign: "right",
  },
  section: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 8,
    fontFamily: "Courier-Bold",
    letterSpacing: 1.4,
    color: C.signal,
    marginBottom: 4,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: C.line,
    lineHeight: 1.2,
  },
  summary: {
    fontSize: 8,
    color: C.body,
    lineHeight: 1.35,
  },
  skillsPanel: {
    backgroundColor: C.panel,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 1.5,
  },
  skillLabel: {
    width: 54,
    fontFamily: "Courier-Bold",
    fontSize: 7.5,
    color: C.ink,
    lineHeight: 1.3,
  },
  skillItems: {
    flex: 1,
    fontSize: 7.5,
    fontFamily: "Courier",
    color: C.muted,
    lineHeight: 1.3,
  },
  role: {
    marginTop: 5,
  },
  roleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  roleTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: C.ink,
    lineHeight: 1.25,
  },
  roleMeta: {
    fontSize: 7.5,
    fontFamily: "Courier",
    color: C.muted,
    lineHeight: 1.25,
  },
  companyLine: {
    fontSize: 8,
    color: C.muted,
    marginTop: 1,
    marginBottom: 2,
    lineHeight: 1.25,
  },
  companyName: {
    fontFamily: "Helvetica-Bold",
    color: C.body,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 1,
    paddingLeft: 1,
  },
  bulletMark: {
    width: 10,
    fontSize: 7.5,
    fontFamily: "Courier-Bold",
    color: C.signal,
    lineHeight: 1.3,
  },
  bulletText: {
    flex: 1,
    fontSize: 8,
    lineHeight: 1.3,
    color: C.body,
  },
  eduHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  eduSchool: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: C.ink,
    lineHeight: 1.25,
  },
  eduDegree: {
    fontSize: 8,
    color: C.muted,
    marginTop: 1,
    lineHeight: 1.25,
  },
  listItem: {
    flexDirection: "row",
    marginBottom: 1,
  },
  listMark: {
    width: 10,
    fontSize: 7.5,
    fontFamily: "Courier-Bold",
    color: C.signal,
    lineHeight: 1.3,
  },
  listText: {
    flex: 1,
    fontSize: 8,
    color: C.body,
    lineHeight: 1.3,
  },
  footerBar: {
    position: "absolute",
    bottom: 16,
    left: 32,
    right: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: C.line,
    paddingTop: 4,
  },
  footerText: {
    fontSize: 6.5,
    fontFamily: "Courier",
    color: C.muted,
  },
});

export function ResumeDocument() {
  const {
    name,
    title,
    email,
    location,
    links,
    summary,
    skills,
    experience,
    education,
    extracurricular,
  } = resume;

  const siteLink = links.find((l) => l.label === "Website");
  const otherLinks = links.filter((l) => l.label !== "Website");

  return (
    <Document
      title={`${name} - Resume`}
      author={name}
      subject="Resume"
      keywords="software engineer, senior, platforms, resume"
    >
      <Page size="LETTER" style={styles.page}>
        <View style={styles.topRule} />

        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>{name.toUpperCase()}</Text>
            <Text style={styles.title}>{`> ${title.toUpperCase()}`}</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.contactItem}>{email}</Text>
            <Text style={styles.contactItem}>{location}</Text>
            {siteLink ? (
              <Link src={siteLink.url} style={styles.link}>
                atherqureshi.com
              </Link>
            ) : null}
            {otherLinks.map((link) => (
              <Link key={link.label} src={link.url} style={styles.link}>
                {link.label.toLowerCase()}
              </Link>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>// SUMMARY</Text>
          <Text style={styles.summary}>{summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>// SKILLS</Text>
          <View style={styles.skillsPanel}>
            {skills.map((group) => (
              <View key={group.label} style={styles.skillRow}>
                <Text style={styles.skillLabel}>{group.label.toLowerCase()}</Text>
                <Text style={styles.skillItems}>{group.items.join(" · ")}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>// EXPERIENCE</Text>
          {experience.map((role) => (
            <View
              key={`${role.company}-${role.title}-${role.start}`}
              style={styles.role}
              wrap={false}
            >
              <View style={styles.roleHeader}>
                <Text style={styles.roleTitle}>{role.title}</Text>
                <Text style={styles.roleMeta}>
                  {role.start} → {role.end}
                </Text>
              </View>
              <Text style={styles.companyLine}>
                <Text style={styles.companyName}>{role.company}</Text>
                {`  ·  ${role.location}`}
              </Text>
              {role.highlights.map((h) => (
                <View key={h} style={styles.bullet}>
                  <Text style={styles.bulletMark}>{">"}</Text>
                  <Text style={styles.bulletText}>{h}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>// EDUCATION</Text>
          {education.map((edu) => (
            <View key={edu.school} wrap={false}>
              <View style={styles.eduHeader}>
                <Text style={styles.eduSchool}>{edu.school}</Text>
                <Text style={styles.roleMeta}>
                  {edu.start} → {edu.end}
                </Text>
              </View>
              <Text style={styles.eduDegree}>{edu.degree}</Text>
              {edu.notes?.length ? (
                <View style={styles.listItem}>
                  <Text style={styles.listMark}>{">"}</Text>
                  <Text style={styles.listText}>{edu.notes.join(" · ")}</Text>
                </View>
              ) : null}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>// EXTRACURRICULAR</Text>
          {extracurricular.map((item) => (
            <View key={item} style={styles.listItem}>
              <Text style={styles.listMark}>{">"}</Text>
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.footerBar} fixed>
          <Text style={styles.footerText}>atherqureshi.com</Text>
          <Text style={styles.footerText}>senior software engineer</Text>
        </View>
      </Page>
    </Document>
  );
}
