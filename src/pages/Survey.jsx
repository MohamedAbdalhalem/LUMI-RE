
import Question from "../components/Question";
import useGetSurvey from "../hooks/useGetSurvey";

export default function Survey() {
  const {survey,isLoading} = useGetSurvey()
  

  if (isLoading) {
    return <SkinQuizSkeleton />;
  }

  return (
    <div className="min-h-screen bg-base-200 py-16 px-4">
      <div className="mx-auto max-w-3xl bg-base-100 p-8 rounded-2xl shadow-md border border-base-300">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold">{survey.title}</h1>
          <p className="text-sm text-base-content/60 mt-1">
            Answer a few simple questions to understand your skin better.
          </p>
        </div>

        <form className="space-y-8">
          {survey.questions.map((question) => (
            <Question
              mappingKey={question.mapping_key}
              questionId={question.question_id}
              questionTitle={question.question_text}
              questionType={question.question_type}
              options={question.options}
            />
          ))}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-4 py-3 rounded-xl bg-black text-white font-medium
        hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function SkinQuizSkeleton() {
  return (
    <div className="min-h-screen bg-base-200 py-16 px-4">
      <div className="mx-auto max-w-2xl bg-base-100 p-8 rounded-2xl shadow-md border border-base-300 animate-pulse">
        {/* HEADER */}
        <div className="mb-8 space-y-3">
          <div className="h-7 w-1/2 bg-base-300 rounded"></div>
          <div className="h-4 w-2/3 bg-base-300 rounded"></div>
        </div>

        <div className="space-y-8">
          {/* QUESTION 1 */}
          <div className="space-y-3">
            <div className="h-4 w-1/3 bg-base-300 rounded"></div>

            <div className="space-y-2">
              <div className="h-4 w-1/4 bg-base-300 rounded"></div>
              <div className="h-4 w-1/3 bg-base-300 rounded"></div>
              <div className="h-4 w-1/5 bg-base-300 rounded"></div>
            </div>
          </div>

          {/* QUESTION 2 */}
          <div className="space-y-3">
            <div className="h-4 w-1/2 bg-base-300 rounded"></div>
            <div className="h-3 w-1/4 bg-base-300 rounded"></div>

            <div className="space-y-2">
              <div className="h-4 w-1/3 bg-base-300 rounded"></div>
              <div className="h-4 w-1/4 bg-base-300 rounded"></div>
              <div className="h-4 w-1/2 bg-base-300 rounded"></div>
            </div>
          </div>

          {/* QUESTION 3 */}
          <div className="space-y-4">
            <div className="h-4 w-1/3 bg-base-300 rounded"></div>

            <div className="h-2 w-full bg-base-300 rounded"></div>

            <div className="flex justify-between">
              <div className="h-3 w-10 bg-base-300 rounded"></div>
              <div className="h-3 w-12 bg-base-300 rounded"></div>
              <div className="h-3 w-10 bg-base-300 rounded"></div>
            </div>
          </div>

          {/* BUTTON */}
          <div className="h-10 w-full bg-base-300 rounded-xl mt-4"></div>
        </div>
      </div>
    </div>
  );
}
