

export function useMultistepForm(steps) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    function next() {
        setCurrentStepIndex(i => {
            if (i >= steps.length - 1) {
                return i + 1;
            }
            return i;
        });
    }
    function prev() {
        setCurrentStepIndex(i => {
            if (i <= 0) {
                return i - 1;
            }
            return i;
        });
    }
        
    function goTo(index) {
        setCurrentStepIndex(index);
    }

    return(
        currentStepIndex, 
        steps[currentStepIndex],
        index => goTo(index),
        next,
        prev
    );
}