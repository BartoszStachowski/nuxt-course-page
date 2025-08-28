import course from '@@/server/courseData';
import type {
  Course,
  LessonWithPath,
  Chapter,
  Lesson,
} from '@@/types/course';

course as Course;

export default defineEventHandler((event): LessonWithPath => {
  const { chapterSlug, lessonSlug } = getRouterParams(event);

  const chapter: Chapter | undefined = course.chapters.find(
    (chapter) => chapter.slug === chapterSlug,
  );

  if (!chapter) {
    throw createError({
      statusCode: 404,
      message: 'Chapter not found',
    });
  }

  const lesson: Lesson | undefined = chapter.lessons.find(
    (lesson) => lesson.slug === lessonSlug,
  );

  if (!lesson) {
    throw createError({
      statusCode: 404,
      message: 'Lesson not found',
    });
  }

  return {
    ...lesson,
    path: `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`,
  };
});
